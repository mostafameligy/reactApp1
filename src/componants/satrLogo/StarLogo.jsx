import React from 'react'
import style from "./star.module.css"
import { help } from '../../helpers/help'

export default function StarLogo(propes) {
  
  return (
    <div className='star-logo'>
            <span className= {help(style.starLine) + " " + ` ${propes.bgColor} me-2 mb-1`}></span>
            <i className={`star-icon ${propes.txColor} fa-solid fa-star`}></i>
            <span className={help(style.starLine) + " " +  ` ${propes.bgColor} ms-2 mb-1`}></span>
    </div>
  )

}
