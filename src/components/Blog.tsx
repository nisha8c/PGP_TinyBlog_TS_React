import React from 'react';
import { Blogdata } from '../types/types';
import './Styles.scss'

interface IBlogProps {
    data: Blogdata
   };

const Blog = ({data}: IBlogProps) => {
    return(
        <>
            <div className='blog-container'>
                <h2 className='blog-header'>
                    {data.title}
                </h2>

                <div className='blog-body'>
                    {data.body}
                </div>

                <div className='blog-footer'>
                    {
                        data.tags.map((tag, index) => (
                            <div>{tag}</div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Blog;