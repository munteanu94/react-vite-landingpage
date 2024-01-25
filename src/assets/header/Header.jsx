import { IoIosSearch } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosCloseCircle } from "react-icons/io";
import "./Header.css";
import { useRef } from "react";
import "./Siderbar.css";

export default function Header() {
  const Navref = useRef();

  const ShowNavbar = () => {
    Navref.current.classList.toggle("show");
  };

  return (
    <>
      <header>
        <nav className="navContainer">
          <div className="menuHide">
            <bottom onClick={ShowNavbar}>
              <BiMenuAltLeft />
            </bottom>
          </div>
          <div className="sidebar" ref={Navref}>
            <bottom className="close" onClick={ShowNavbar}>
              <IoIosCloseCircle />
            </bottom>

            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">SALE</a>
              </li>
            </ul>
          </div>
          <ul className="ulHide">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">SALE</a>
            </li>
          </ul>
          <div>
            <h5>MEJIWOO</h5>
          </div>
          <ul>
            <li className="input">
              <input type="text" placeholder="Search"></input>
              <div className="search">
                <IoIosSearch />
              </div>
            </li>
            <li className="icons">
              <BsHandbag />
            </li>
            <li className="icons">
              <IoPersonOutline />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
