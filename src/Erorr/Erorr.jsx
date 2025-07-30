import React from 'react'
import style from "./erorr.module.css"
import { Link } from 'react-router-dom'
import {help} from "./../helpers/help.js"
export default function Erorr() {

  

  return (
    <div className={ help(style.erorr) + " " + ' vh-100 erorr d-flex  justify-content-center  align-items-start'} >
      <Link type="button" class="btn btn-secondary mt-5"  to="/home">Home</Link>
    </div>
  )
}
