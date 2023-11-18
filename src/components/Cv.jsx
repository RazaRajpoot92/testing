import { useState } from "react";
import im from "../assets/4.jpg"


function Cv(){
    return(
        <>
        <div className="container">
            <div className="leftside">
                <div className="img-con">
                    <img src={im} width={"100%"} height={"100%"} alt="" />
                </div>
                <div className="prof-con">
                            <h1>Ahmad Raza</h1>
                            <div className="line"></div>
                            <p>Frontend Developer (React)</p>
                </div>

            <br />

                <div className="bar-inner">
                    <div className="bar-outer"></div>
                </div>
                
            </div>

            <div className="rightside">right</div>
        </div>
            
        
        </>
    )
}

export default Cv;