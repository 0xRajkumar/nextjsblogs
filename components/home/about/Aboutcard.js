import { React } from "react";
import { CgGift } from "react-icons/cg";
import aboutcardcss from './aboutcard.module.css'
import { IconContext } from "react-icons";
function AboutCard(props) {
    return (
        <>
            <div className={aboutcardcss.card_div}>
                <div className={aboutcardcss.card_div_icon}>
                    <span> 
                            {props.icon}    
                    </span>
                </div>
                <div className={aboutcardcss.card_div_text}>
                    <h1> {props.heading}</h1>
                    <p>{props.para}</p>
                </div>
            </div>
        </>
    )

}
export default AboutCard