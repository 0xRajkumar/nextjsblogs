import React, { useState, useEffect } from 'react';
import Link from 'next/link';


import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import {IoMdPeople , IoMdHelpCircle} from 'react-icons/io';



import { SidebarData } from './SidebarData';
import navbarcss from './navbar.module.css';
import { auth } from '../../firebase';


function Navbar({ user }) {
  
  const [sidebar, setSidebar] = useState(false);
  const [Navbar, setNavbar] = useState(false);


  const showSidebar = () => setSidebar(!sidebar);
  function Burger_crose() {
    if (sidebar === false) {
      return <GiHamburgerMenu onClick={showSidebar} />
    } else {
      return <AiOutlineClose onClick={showSidebar} />
    }
  }
  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleScroll = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 24) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }

  }



  return (
    <>

      <nav className={Navbar ? `${navbarcss.navbar} ${navbarcss.navbaractive}` : `${navbarcss.navbar}`}>


        <h1 className={navbarcss.mylogo} >BloggersWay.</h1>
        <ul className={navbarcss.navbar_ul}>
          <li><Link href="/" ><a className="basic_4">Home</a></Link></li>
          <li><Link href="#about" ><a className="basic_4">About</a></Link></li>
          {/* <li><Link href="/" ><a className="basic_4">Features</a></Link></li> */}
          <li><Link href="/#features" ><a className="basic_4">Features</a></Link></li>
          <li><Link href="/createblog" ><a className="basic_4">Create Blogs</a></Link></li>
          <li><Link href="/blogs" ><a className="basic_4">Blogs</a></Link></li>
        </ul>
        <div className={navbarcss.login_button}>
          <Link href={user ? "/" : "/login"}><a>
            <button onClick={() => { auth.signOut() }} className="btn" >{user ? "Logout" : "Login"}</button>
          </a>
          </Link>
        </div>






        <div className={navbarcss.menubars}>
          <a>
            <Burger_crose />
          </a>

        </div>
      </nav>

      {/* Our side Bar */}

      <div className={sidebar ? `${navbarcss.active} ${navbarcss.navmenu}` : `${navbarcss.navmenu}`}>
        <ul className={navbarcss.navmenuitems}>
          <li className={navbarcss.navtext}>
            <h1 className={navbarcss.mylogo} >BloggersWay.</h1>
          </li>
          {SidebarData.map((item, index) => {
            if (index < 5) {


              return (
                <li onClick={showSidebar}  key={index} className={navbarcss.navtext}>
                  <Link href={item.path}><a className="basic_4">
                    {item.icon}
                    <span className={navbarcss.navslidebartitle}>{item.title}</span></a>
                  </Link>
                </li>
              );
            }
          })}
            <li onClick={showSidebar}   className={navbarcss.navtext}>
                  <Link href={user ? "/" : "/login"}><a className="basic_4">
                  <IoMdHelpCircle onClick={showSidebar} />
                    <span onClick={() => { auth.signOut()  }} className={navbarcss.navslidebartitle}>{user ? "Logout" : "Login"}</span></a>
                  </Link>
                </li>
        </ul>
      </div>

    </>
  );
}

export default Navbar;
