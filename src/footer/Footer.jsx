import React from "react";
import style from "./footer.module.css"
import {help} from "./../helpers/help"
export default function Footer() {
  
  return (
    <div className={help(style.footer)}>
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
          <div className="col py-3 mx-auto">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col py-3 mx-auto">
            <h3>AROUND THE WEB</h3>
            <div className="foot-icons">
                <i className=" p-2 border rounded-circle mx-2 fa-brands fa-facebook"></i>
                <i className=" p-2 border rounded-circle mx-2 fa-brands fa-facebook-messenger"></i>
                <i className=" p-2 border rounded-circle mx-2 fa-brands fa-linkedin"></i>
                <i className=" p-2 border rounded-circle mx-2 fa-brands fa-twitter"></i>
            </div>
          </div>
          <div className="col py-3 mx-auto">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
        <div className="footer-fot py-3 bg-dark">
            <p>Copyright © Your Website 2021</p>
        </div>
    </div>
  );
}
