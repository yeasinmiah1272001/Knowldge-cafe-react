
import Profile from '../../assets/images/profile.png'
const Header = () => {
       return (
              <header className='flex justify-between  p-4 border-b-4 mx-auto max-w-7xl'>
                      <h1 className=' text-3xl font-bold'>Knowledge Cafe</h1>
                      <img src={Profile} alt="" />
                     
              </header>
       );
};

export default Header;