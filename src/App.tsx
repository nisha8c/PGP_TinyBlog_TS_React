
import React, { useEffect, useState } from "react";
import { FetchState, Blogdata } from './types/types';

function App() {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [blogs, setBlogs] = useState<Blogdata[]>([]);

  
  useEffect(() => {
    setFetchState(FetchState.LOADING);
    const getData = async () => {
      const response = await fetch('https://dummyjson.com/posts');
      const data = await response.json();
      console.log('DATA of BLOGS: ', data);
      console.log('DATA of POSTS: ', data.posts);
      setBlogs(data.posts);
      setFetchState(FetchState.SUCCESS);
    };
    getData();
  }, [blogs]);
  

  return (
    <>
      <div className="App">
        <h1>List of Blogs</h1>
        <ul className='cards'>
        {
          blogs.map(blog => {
            
            return(
              <li className='blog-card' key={blog.id}>
                <div className='blog-header'>
                  {blog.body}
                </div>

                

              </li>
            );
          })
        }
      </ul>
      </div>
    </>
  );
}

export default App;
