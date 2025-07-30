import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from "./nav.module.css"
import {help} from "./../../helpers/help.js"
export default function Navbar() {
  
    let [scrol , setscroll] = useState(false);
    window.addEventListener("scroll" , ()=>{
        if(window.scrollY){
            setscroll(false)
        }
        else{
            setscroll(true);
        }
    })

  return <nav id= 'my-navbar' className={style.nav +  " "+`${scrol ? "py-3": "" } text-center bg-dark navbar navbar-expand-lg fixed-top`}>
  <div className="container">
    <NavLink className= { style.navBrandStyle + " " + " mx-auto navbar-brand text-uppercase"} to="/home">Start Framework</NavLink>
    <button  className="border border-5 navbar-toggler mx-auto text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fa-solid fa-list"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item rounded-5   mx-4">
          <NavLink className={help(style.navLinkStyle)+" " + "nav-link my-1 rounded-5"} aria-current="page" to="/about">ABOUT</NavLink>
        </li>
        <li className="nav-item rounded-5  mx-4">
          <NavLink className={help(style.navLinkStyle)+" " + "nav-link my-1 rounded-5"} aria-current="page" to="/protofile">PROTOFILE</NavLink>
        </li>
        <li className="nav-item rounded-5  mx-4">
          <NavLink className={help(style.navLinkStyle)+" " + "nav-link my-1 rounded-5"} aria-current="page" to="/Conection">CONTANT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
}
