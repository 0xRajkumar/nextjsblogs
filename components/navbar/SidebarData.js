
import {AiFillHome} from 'react-icons/ai';
import {FcAbout} from 'react-icons/fc';
import {MdFeaturedPlayList , MdCreate} from 'react-icons/md';
import {IoMdPeople , IoMdHelpCircle} from 'react-icons/io';
import {FaEnvelopeOpenText} from 'react-icons/fa';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/#about',
    icon: <FcAbout />,
    cName: 'nav-text'
  },
  {
    title: 'Featuring',
    path: '/#features',
    icon: <MdFeaturedPlayList />,
    cName: 'nav-text'
  },
  {
    title: 'Create Blogs',
    path: '/createblog',
    icon: <MdCreate />,
    cName: 'nav-text'
  },
  {
    title: 'Blogs',
    path: '/blogs',
    icon: <IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
