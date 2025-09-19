import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Jensi Patel</p>
      <div className="footer__social">
        <a href="#" className="footer__icon"><i className='bx bxl-facebook'></i></a>
        <a href="#" className="footer__icon"><i className='bx bxl-instagram'></i></a>
        <a href="#" className="footer__icon"><i className='bx bxl-twitter'></i></a>
      </div>
      <p className="footer__copy">&#169; Copyright</p>
    </footer>
  );
}

export default Footer;
