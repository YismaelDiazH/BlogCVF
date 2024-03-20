import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext.js";
const Navbar = () => {

  const { currentUser,logout } = useContext(AuthContext);

  return (
    <div className="px-4 bg-white border-gray-200 dark:bg-gray-900 font-mono outline outline-1 outline-orange-400">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <Link to={"/"}> <strong className="font-normal">Yismael Diaz</strong>
        </Link> 
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto">
          <div
            className="font-medium flex flex-col md:p-0 mt-4 border border-gray-100  bg-gray-50 md:flex-row md:space-x-2 md:mt-0 
md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <Link
              className="py-1 px-1 transition-all border-b-2 border-white  duration-400 hover:border-b-2 hover:border-orange-400 hover:rounded-lg  hover:text-orange-400"
              to="/moncv"
            >
              <strong className="font-normal">Mon CV</strong>
            </Link>
            <Link
              className="py-1 px-1 transition-all border-b-2 border-white  duration-400 hover:border-b-2 hover:border-orange-400 hover:rounded-lg  hover:text-orange-400"
              to="/?cat=frontend"
            >
              <strong className="font-normal">Frontend</strong>
            </Link>
            <Link
              className="py-1 px-1 transition-all border-b-2 border-white  duration-400 hover:border-b-2 hover:border-orange-400 hover:rounded-lg  hover:text-orange-400"
              to="/?cat=backend"
            >
              <strong className="font-normal">Backend</strong>
            </Link>
            <Link
              className="py-1 px-1 mr-5 transition-all border-b-2 border-white  duration-400 hover:border-b-2 hover:border-orange-400 hover:rounded-lg  hover:text-orange-400"
              to="/?cat=ux_ui"
            >
              <strong className="font-normal ">UX/UI</strong>
            </Link>
         
           {currentUser? <span className="  py-1 px-1 transition-all border-b-2  border-white  duration-400 hover:border-b-1 hover:border-orange-400 hover:rounded-lg  hover:text-orange-400 cursor-pointer"
           onClick={logout}> 
              Déconnexion
            </span> : <Link
              className=" py-1 px-1 transition-all border-b-2 border-white  duration-400 hover:border-b-2 hover:border-orange-400 hover:rounded-lg  hover:text-orange-400"
              to="/login">Connexion</Link>}
              {currentUser?
             <span className="content-center flex ">
              <Link
                className="py-1 px-1 transition-all border-b-2 border-white  duration-400 hover:border-b-2 hover:border-orange-400 hover:rounded-lg  hover:text-orange-400"
                to="/write"
              >
                Rédaction
              </Link>
            </span>  : null}
            <span className="py-1 px-1 transition-all    duration-400 border-b-2 border-orange-700 rounded-lg  text-white  bg-orange-400 ">
              {currentUser?.username}
            </span>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
