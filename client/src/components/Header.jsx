import { Button, Navbar } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { IoMdMoon } from 'react-icons/io';
import { IoSunnyOutline } from 'react-icons/io5';
import { toggleTheme } from '../redux/theme/themeSlice';
import rgLogo from '../assets/rg-logo.png';

const Header = () => {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  return (
    <header>
      <Navbar
        fluid
        rounded
        className='!bg-transparent p-6 md:px-40 shadow-lg drop-shadow-xl'
      >
        <Link to='/'>
          <Navbar.Brand as={'div'}>
            <img
              src={rgLogo}
              alt='RG-Logo'
              className='w-11 h-11 rounded-full object-cover mr-2'
            />
            <span className='self-center md:text-3xl whitespace-nowrap text-xl font-semibold dark:text-white'>
              Rodel Gabriel
            </span>
          </Navbar.Brand>
        </Link>
        <Button
          type='button'
          onClick={() => dispatch(toggleTheme())}
          outline
          gradientDuoTone='purpleToBlue'
        >
          {theme === 'light' ? <IoMdMoon /> : <IoSunnyOutline />}
        </Button>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link as={'div'} active={path === '/'}>
            <Link to='/' className='md:text-xl'>
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link as={'div'} active={path === '/portfolio'}>
            <Link to='/portfolio' className='md:text-xl'>
              Portfolio
            </Link>
          </Navbar.Link>
          <Navbar.Link as={'div'} active={path === '/about'}>
            <Link to='/about' className='md:text-xl'>
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link as={'div'} active={path === '/contact'}>
            <Link to='/contact' className='md:text-xl'>
              Contact
            </Link>
          </Navbar.Link>
          <Navbar.Link as={'div'} active={path === '/admin-login'}>
            <Link
              to={currentUser ? '/admin-dash' : '/admin-login'}
              className='md:ml-5 md:text-xl md:bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-md md:p-2 md:text-white md:shadow-md md:hover:outline md:outline-teal-500'
            >
              {currentUser ? currentUser.username : 'Admin'}
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
