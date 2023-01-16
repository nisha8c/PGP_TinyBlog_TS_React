
import React, { useEffect, useState } from "react";
import { FetchState, Blogdata } from './types/types';
import Blogs from './components/Blogs';
import './App.css';


function App() {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [blogs, setBlogs] = useState<Blogdata[]>([]);

  
  try {
    useEffect(() => {
      setFetchState(FetchState.LOADING);
      const getData = async () => {
        const response = await fetch('https://dummyjson.com/posts');
        const data = await response.json();
        setBlogs(data.posts);
        setFetchState(FetchState.SUCCESS);
      };
      getData();
    }, []);
  } catch (error) {
    console.error('Error in fetching blogs', error);
    setFetchState(FetchState.ERROR);
  }
  

  return (
    <>
      <div className="App">
        <h1>List of Blogs</h1>
        <Blogs data={blogs}/>
      </div>
    </>
  );
}

export default App;
