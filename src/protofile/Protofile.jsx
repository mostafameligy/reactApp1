import React, { useEffect, useState } from 'react'
import Card from './../componants/card/Card'
import StarLogo from './../componants/satrLogo/StarLogo'
import style from './pro.module.css'
import img1 from "./../../public/images/protofile/1.jpeg"
import img2 from "./../../public/images/protofile/2.png"
import img3 from "./../../public/images/protofile/3.jpg"
import img4 from "./../../public/images/protofile/4.jpeg"
import img5 from "./../../public/images/protofile/5.jpg"

export default function Protofile() {
    let [bgBage , setBgBage] = useState(false);
    let i = -1  ;
    const [imgLink , setImgLink] = useState([
        img1,img2,img3,img4,img5,img3
   ]);
    let col =  document.querySelectorAll('.protofile .col');
    let [bgColor , setBgColor] =useState([
        'bg-danger',
        'bg-dark',
        'bg-info',
        'bg-primary',
        'bg-info',
        'bg-danger',
    ]);
    useEffect(()=>{
        
        let cards = document.querySelectorAll(".my-card");
        let mainBg = document.querySelector(".pageLayer");
        let mainBgImge = document.querySelector(".pageLayer .image");

        for(let i = 0 ;i<cards.length;i++){
            cards[i].addEventListener("click", (e)=>{

                let imgCard = document.querySelectorAll(".card-image");
                let imgsrc = imgCard[i].getAttribute("src");
                mainBgImge.style.backgroundImage = (`url(${imgsrc})`)
                setBgBage(true);
                                    
            })
        };
        mainBg.addEventListener('click' , (e)=>{
            if(e.target == e.currentTarget){
                setBgBage(false);
            }        
        });
    },[])
  return (
    <div id='protofile' className={ style.protofile + " "+ `py-5 position-relative`}>
        <div className="container text-center">
            <div className=" text-uppercase proto-hed ">
                <h2 className={style.title}>portfolio component</h2>
                <div className='w-50 mx-auto pt-3 '>
                    <StarLogo bgColor= "bg-dark" txColor = "text-dark"  />
                </div>
            </div>
            <div className=" mt-5 row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
                {
                    imgLink.map((link , index)=>{
                        i++;
                        return <Card cardstyle={style.card} layerStyle={style.layer} key = {index}  link = {link} Color = {bgColor[i]}  />
                    })
                }
            </div>
            
            <div  className={`${style.pageLayer} pageLayer position-absolute ${bgBage ? "d-flex" : 'd-none' } justify-content-center align-items-center`}>
                <div className={ style["backgroung-page-image"]  + " " + ' image w-50 h-50 '}></div>
            </div>
        </div>
    </div>
  )
}
