import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log('log out successfully');
      })
      .catch(error => {
        console.log(error);
      })
  };

  return (
    <div className="navbar bg-base-100 h-10 mb-4 mt-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"} className="font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="font-bold">
                About
              </Link>
            </li>
            <li>
              <Link to={"/services"} className="font-bold">
                Service
              </Link>
            </li>
            <li>
              <Link to={"/blog"} className="font-bold">
                Blog
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="font-bold">
                Contact
              </Link>
            </li>
            {user ? (
            <li>
              <button onClick={handleLogOut} className="font-bold">LogOut</button>
              <Link className="font-bold" to={'/bookings'}>My Bookings</Link>
            </li>
          ) : (
            <li>
              <Link to={'/login'}><button  className="font-bold">Login</button></Link>
            </li>
          )}
          </ul>
        </div>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"} className="font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="font-bold">
              About
            </Link>
          </li>
          <li>
            <Link to={"/service"} className="font-bold">
              Service
            </Link>
          </li>
          <li>
            <Link to={"/blog"} className="font-bold">
              Blog
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="font-bold">
              Contact
            </Link>
          </li>
          {user ? (
            <li>
              <button onClick={handleLogOut} className="font-bold">LogOut</button>
              <Link className="font-bold" to={'/bookings'}>My Bookings</Link>
            </li>
          ) : (
            <li>
              <Link to={'/login'}><button  className="font-bold">Login</button></Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <Link className=" btn btn-outline btn-orange">Appointment</Link>
      </div>
    </div>
  );
};

export default NavBar;
