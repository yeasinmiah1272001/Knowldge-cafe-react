// import Profile from '../../assets/images/save-instagram.png'


import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleBook, handletime}) => {
       const {title, cover, reading_time, author, author_img, posted_date, hashtags} = blog;
       console.log(blog)
       return (
              <div className="mb-20">
                     <img className="w-full mb-8" src={cover} alt="" />
                     <div className="flex justify-between mb-4">
                            <div className="flex gap-3">
                                   <img className="w-12" src={author_img} alt="" />
                                   <div>
                                          <h3>{author}</h3>
                                          <p>{posted_date}</p>
                                   </div>


                            </div>

                            <div className='flex'>
                                   <span>{reading_time} min read</span>
                                   {/* <button><img  className='w-8 h-8 align-center mb-7 gap-3' src={Profile} alt="" /></button> */}

                                   <button onClick={()=>handleBook(blog)} className='ml-2 mb-6 text-red-500'><FaBookmark></FaBookmark></button>
                                  
                                  

                            </div>
                     </div>
                     <h2 className="text-4xl mb-4">Tittle:{title}</h2>
                     <p>
                            {
                                   hashtags.map(hash=> <span><a href="">#{hash}</a></span>)
                            }
                     </p>

                     <button onClick={() => handletime(reading_time)} className='underline text-xl my-3'>Mark as Read</button>
              </div>
       );
};

export default Blog;