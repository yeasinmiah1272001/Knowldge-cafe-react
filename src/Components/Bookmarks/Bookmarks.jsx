import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {
       // const {} = bookmarks;
       return (
              <div className="md:w-1/3 bg-zinc-100 ml-7">
                     <div>
                            <h3 className="text-center my-3 text-xl font-bold">Reading Time: <span className="text-red-600">{readingTime}</span></h3>
                     </div>
                     <h2 className="text-3xl text-center">Bookmarks: {bookmarks.length}</h2>

                     {
                            bookmarks.map(bookmark=> <Bookmark bookmark={bookmark}></Bookmark>)
                     }

                     
                     
              </div>
       );
};

export default Bookmarks;