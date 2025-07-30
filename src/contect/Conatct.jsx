import StarLogo from "./../componants/satrLogo/StarLogo";
import style from "./contect.module.css"
import { help } from "../helpers/help";

export default function Conatct() {
  return (
    <div id="Conection" className={ help(style.conatct) + " " + " conatct py-5"}>
      <div className="container py-3">
        <h2 className={ help(style.titleStyle)+" "+"  pb-3 m-auto text-center text-white text-uppercase "}>conatct section</h2>
        <div className=" m-auto pb-3 text-center w-50">
          <StarLogo bgColor="bg-white" txColor="text-white" />
        </div>
        <form className=" px-2   text-center w-50 mx-auto rounded-5 ">
          <input required type="text" name="userName" placeholder="User Name" className={  help(style.inputStyle) +" " +"inputs-cont w-100 d-block mx-auto p-3 rounded-5 mb-4"} />
          <input required type="number" name="userAge" placeholder="uaer Age" className={  help(style.inputStyle) +" " +"inputs-cont w-100 d-block mx-auto p-3 rounded-5 mb-4"} />
          <input required type="email" name="userEmail" placeholder="user Email" className={  help(style.inputStyle) +" " +"inputs-cont w-100 d-block mx-auto p-3 rounded-5 mb-4"} />
          <input required type="password" name="userPassword" placeholder="user Password" className={  help(style.inputStyle) +" " +"inputs-cont w-100 d-block mx-auto p-3 rounded-5 mb-4"} />
          <button type="submit" className={help(style.btnStyle) +" " + "  m-auto rounded-5 d-block btn text-white "}>send Message</button>
        </form>
      </div>
    </div>
  );
}
