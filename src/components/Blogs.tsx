import React, { useState } from "react";
import toast from 'react-hot-toast';
import { Blogdata } from '../types/types';
import { motion } from 'framer-motion';
import Blog from './Blog';
import './Styles.scss'

interface IBlogsProps {
 data: Blogdata[]
};

const Blogs = ({data}: IBlogsProps) => {
    const [filter, setFilter] = useState(data);
    const [activeFilter, setActiveFilter] = useState('All');

    const handleTagFilter = (item: string) => {
        setActiveFilter(item);
    
        setTimeout(() => {
    
          if (item === 'All') {
            setFilter(data);
          } else {
            setFilter(data.filter((blog) => blog.tags.includes(item)));
          }
        }, 500);

        toast.success(`${item} is selected.`, {
            position: "bottom-center",
          });
    };

    return(
        <>
            <div className="app__blog-filter">
                {['american', 'english', 'history', 'magical', 'fiction', 'All'].map((item, index) => (
                <div
                    key={index}
                    onClick={() => handleTagFilter(item)}
                    className={`app__blog-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                >
                    {item}
                </div>
                ))}
            </div>

            <motion.div
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__tiny-blog"   
            >
                {
                    filter.map((blog, index) => (
                        <Blog data={blog} />
                    ))
                }

            </motion.div>
        </>
    );

};

export default Blogs;