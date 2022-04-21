import React from "react";
import { FaSearch } from 'react-icons/fa';
import {Link} from "react-router-dom"

function Header(){

const handleLogout= () => {
    localStorage.removeItem("token");
    window.location.reload()
}


    return(
            <nav className="bg-slate-300 top-0 flex items-center px-10">
                <div className="container mx-auto flex flex-row items-center justify-between px-4 py-6">
                    <ul className="flex flex-col md:flex-row items-center">
                        <li className="">
                            <Link to="/"  className="flex flex-row items-center">
                                <h1 className="text-blue-500   text-4xl  underline underline-offset-1 ">Mai</h1>
                                <FaSearch className="ml-2 text-[50px]"/>
                            </Link>    
                        </li>
                        <li className="ml-[1000px]">
                            <Link to="/Profile"  className="flex flex-row items-center">
                                <h1 className="text-2xl ">MyProfile</h1>
                            </Link> 
                        </li>
                        <li className="ml-6">
                            <Link to="/SignUp"  className="flex flex-row items-center">
                                <h1 className= "text-2xl  ">SignUp</h1>
                            </Link> 
                        </li>
                        <li className="ml-6">
                            <Link to="/Login"  className="flex flex-row items-center">
                                <h1 className="text-2xl  ">Login</h1>
                            </Link> 
                        </li>
                        <li className="ml-6">
                                <h1 className="text-2xl  " onClick={handleLogout}>LogOut</h1>
                        </li>
                    </ul>
               </div>
            </nav>
    )
}

export default Header;