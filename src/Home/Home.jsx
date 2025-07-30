import React from 'react'
import StarLogo from './../componants/satrLogo/StarLogo'
import style from './Home.module.css'
import { help } from '../helpers/help'
import myImage from "../images/me.jpg"

export default function Home() {
  return (
    <div id='home' className={ help(style.Home) + " "+ 'vh-100 d-flex flex-column justify-content-center align-items-center py-5 text-center'}>
        <div className="my-img w-25  py-5">
            <img className={ help(style.imgStyle)+ " "+ 'rounded-circle img-fluid'} src={myImage}  alt="my photo" />        
        </div>
        <div className="content-img pb-5">
            <h2 className={ help(style.titleStyle)+" "+ 'text-white  text-uppercase'}>start Framework</h2>
            <StarLogo bgColor= "bg-white" txColor = "text-white" />
            <p className='text-white pt-2'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
  )
}
