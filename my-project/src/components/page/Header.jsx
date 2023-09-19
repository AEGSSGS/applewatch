import React from 'react'
import img1 from "../img/logo.svg"
export default function Header() {
  return (
    <>
      <nav className="nav">

        <div className="nav__inner">

          <a href="./index.html" className="nav__logo">
            <img classNameName="nav__img" src={img1} alt="Apple" />
          </a>

          <ul className="nav__list">
            <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
            <li className="nav__item"><a href="#offers" className="nav__link">Offers</a></li>
            <li className="nav__item"><a href="#services" className="nav__link">Services</a></li>
          </ul>

          <form action="" className="form">
            <input className="help" type="search" placeholder="How can we help you?" />
          </form>

          <div className="menu">
            <rect className="burger-top"></rect>
            <rect className="burger-mid"></rect>
            <rect className="burger-bot"></rect>
          </div>

        </div>

      </nav>
    </>


  )
}
