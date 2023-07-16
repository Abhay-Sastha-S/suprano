import React from "react";
import '../stylesheets/Intro.css'

const img = [1,2,3]

const Intro = () => {
    return(
        <div className="intro-Wrapper">
             <div className="intro-CompText"><p>Suprano Exhibits</p></div>
            <div className="intro-ImageWrapper">
                {
                    img.map((el,index)=>(
                        <div key={index} className={`intro-Img intro-Img${el}`}>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Intro