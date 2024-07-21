import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Hala</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            className="footer__social-link"
            href="https://www.linkedin.com/in/hala-babelly-bb15332bb/"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            className="footer__social-link"
            href="https://www.facebook.com/hala.babelly"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
