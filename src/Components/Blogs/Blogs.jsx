import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleBook, handletime}) => {
       const [blogs, setBlog] = useState([])
       useEffect(() =>{
              fetch('Blogs.json')
              .then(res => res.json())
              // .then(data => setBlog(data))
              .then(data => setBlog(data))
       },[])

       return (
              <div className="md:w-2/3 ">
                     <h3 className="text-4xl ">Blogs: {blogs.length}</h3> 
                     {
                            blogs.map(blog => <Blog blog={blog} handleBook={handleBook} handletime={handletime} ></Blog>)
                     }
              </div>
       );
};

export default Blogs;