import React from 'react';
import {Link, NavLink} from "react-router-dom";
import "./style.css"
import Footer from "../Footer";
import Header from "../Header";
import logo from "./Logo1.png"


const Layout = ({children}) => {
    return (
        <main className='main'>
            <aside className="aside">
                <div className="borderH">
                    <Link to="/news-line"><img src={logo} alt="logo" className="logo"/>
                    </Link>
                </div>
                <p className="name-nav pt-3 pb-2 ">MENU</p>
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink to='/my-profile' className='hover:text-red-600 pb-4 font-bold'><i
                            className='bx bx-user-circle font-bold'/> My profile</NavLink>
                        <NavLink to='/news-line' className='hover:text-red-600 pb-4 font-bold'>
                            <i className='bx bx-home-alt font-bold'/> Home</NavLink>
                        <NavLink to='/message' className='hover:text-red-600 pb-4 font-bold'><i
                            className='bx bx-conversation font-bold'/> Message</NavLink>
                        <NavLink to='/friends' className='hover:text-red-600 pb-4 font-bold'><i className='bx bx-group font-bold'/> Friends</NavLink>
                    </li>
                </ul>
            </aside>
             <div className='content'>
                <Header/>
                <div className="h-screen">
                    {children}
                </div>
                <Footer/>
            </div>
        </main>
    );
};

export default Layout;