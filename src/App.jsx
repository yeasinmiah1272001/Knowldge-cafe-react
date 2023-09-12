import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const [readingTime, setReadingtime] = useState(0)

  const handletime = time =>{
    const newTime = readingTime + time;
    setReadingtime(newTime)
   
  }

  const handleBook = (blog) =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }
  

  return (
    <>
     
     <Header></Header>
     <div className='md:flex mx-auto max-w-7xl'>
      <Blogs handleBook={handleBook} handletime={handletime}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
      
    
    </>
  )
}

export default App
