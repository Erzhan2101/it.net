import React from 'react';
import './style.css'

const Header = () => {
    return (
        <header>
            <div className="header">
                <form>
                    <div className="relative text-gray-600 search-system">
                        <input type="search" name="search" placeholder="Search" className="bg-white  text-gray-800  input-search "/>
                            <button type="submit" className="btn">
                               search
                            </button>
                    </div>
                </form>
                <div className="authorization">
                    {/*<img src="" alt=""/>*/}
                    {/*<p className="user_name"></p>*/}
                    <button className="login">log in</button>
                    <button className="btn">registration</button>
                </div>
            </div>
        </header>
);
};

export default Header;