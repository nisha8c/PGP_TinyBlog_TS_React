import React, { useState } from "react";
import { Blogdata } from '../types/types';
import { motion } from 'framer-motion';

interface IBlogsProps {
 data: Blogdata[]
};

const Blogs = ({data}: IBlogsProps) => {
    const [filter, setFilter] = useState(data);
    const [activeFilter, setActiveFilter] = useState('All');

    const filterBlogs = (tag: string) => {
        const updatedList = () => data.filter((blog) => blog.tags.includes(tag));
        setFilter(updatedList);
    };

    const handleTagFilter = (item: string) => {
        setActiveFilter(item);
    
        setTimeout(() => {
    
          if (item === 'All') {
            setFilter(data);
          } else {
            setFilter(data.filter((blog) => blog.tags.includes(item)));
          }
        }, 500);
    };

    return(
        <>
            <div className="app__work-filter">
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
                        <div>{blog.body}</div>
                    ))
                }

            </motion.div>
        </>
    );

};

export default Blogs;