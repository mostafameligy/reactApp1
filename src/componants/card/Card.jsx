import React, { useState } from 'react'
import { help } from '../../helpers/help';

export default function Card(propes ) {
  
  return (
    <div>
        <div  className={  `${propes.cardstyle}  col py-5 my-3 m-1 rounded-5 ${propes.Color}  position-relative`}>
            <div  className={ propes.layerStyle + " " + 'my-card rounded-5'}><i className="fa-solid fa-plus "></i></div>
            <div className="inner  w-50 mx-auto overflow-hidden">
                <img className='card-image border  rounded-circle img-fluid' src={`./../../../images/protofile/${propes.link}`} alt="protofilePhoto" />
            </div>
        </div>
    </div>
  )
}
