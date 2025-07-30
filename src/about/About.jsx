import React from 'react'
import StarLogo from '../componants/satrLogo/StarLogo'
import style from "./about.module.css"
import { help } from '../helpers/help'

export default function About() {
  return (
    <div id='about' className={help(style.about) + " " + ' py-5 d-flex justify-content-center'}>
      <div className="inner py-5 text-center ">
        <h2 className= { help(style.titleStyle)+ " " + 'pt-5 text-uppercase'}>about component</h2>
        <div className=' w-25 mx-auto py-3'>
        <StarLogo bgColor= "bg-white" txColor = "text-white"  />

        </div>  
        <div className='about-desc container'>
            <div className="row">
                <div className="col col-sm-12 col-md-6 text-start">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col col-sm-12 col-md-6 text-start pb-5">
                    <p >Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

                </div>
            </div>

        </div>
      </div>
    </div>
  )
}
