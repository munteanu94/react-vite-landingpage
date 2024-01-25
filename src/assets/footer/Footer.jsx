import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TbCircleLetterC } from "react-icons/tb";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="containerFooter">
      <div className="containerColumns">
        <div className="logoFooter">
          <h2>MEJIWOO</h2>
          <p>미지우</p>
        </div>
        <div>
          <h4>About Us</h4>
          <ul>
            <li>News</li>
            <li>Official Store</li>
            <li>Company</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h4>Get Help</h4>
          <ul>
            <li>FAQ</li>
            <li>Shipping</li>
            <li>Payment</li>
            <li>Returns</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <div className="socialMedia2">
            <IoLogoFacebook />
            <FaInstagramSquare />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
        <div className="footerMidlle">
          <a href="#">
            <strong>Guide</strong>
          </a>
          <a href="#">
            <strong>Terms & Conditions</strong>
          </a>
          <a href="#">
            <strong>Privacy Policy</strong>
          </a>
        </div>
      </div>

      <div className="footerBottom">
        <p>
          <TbCircleLetterC />
          2023 MEJIWOO. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
