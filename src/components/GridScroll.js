import { useEffect } from 'react'
import '../stylesheets/GridStyle.css'
import img1 from "../assets/images/components/grid1.jpg"
import img2 from "../assets/images/components/grid2.jpg"
import img3 from "../assets/images/components/grid3.jpeg"
import img4 from "../assets/images/components/grid4.jpeg"
import img5 from "../assets/images/components/grid5.jpeg"
import img6 from "../assets/images/components/grid6.jpeg"
import img7 from "../assets/images/components/grid7.jpeg"
import img8 from "../assets/images/components/grid8.jpg"
import img9 from "../assets/images/components/grid9.jpg"
import { ArrowRightAlt } from '@mui/icons-material'

let img = [[img1,img2,img3],[img4,img5,img6],[img7,img8,img9]]

const GridScroll = () => {
    useEffect(()=>{
        const grid_Wrap = document.querySelector(".grid-component-wrapper")
        const cen_Col = document.querySelector(".center-column")
        const side_Col = document.querySelectorAll(".side-column")
        const cen_El = document.querySelectorAll(".is-cen")
        const grid_frame = document.querySelector(".grid-frame")
        const main_Text = document.querySelector(".main-text")

        const gridAnim = () =>{
            var scrPerc = (-grid_Wrap.getBoundingClientRect().y/document.documentElement.clientHeight)<0?0:(-grid_Wrap.getBoundingClientRect().y/document.documentElement.clientHeight)>2?2:(-grid_Wrap.getBoundingClientRect().y/document.documentElement.clientHeight)
            scrPerc = scrPerc/2


            cen_Col.style.width = `${30 + (scrPerc)*70}vw`
            cen_Col.classList.toggle("margin-zero",scrPerc>0.98)
            grid_frame.classList.toggle("overflow-hidden",scrPerc>0.8)
            main_Text.classList.toggle("opacity-full",scrPerc>0.8)
            side_Col.forEach((el)=>{
                el.style.width = `${30 - (scrPerc)*30}vw`
            })

            cen_El.forEach((el)=>{
                el.style.height = `${32 + (scrPerc)*68}vh`
                el.classList.toggle("margin-zero",scrPerc>0.98)
            })

        }

        window.addEventListener("scroll",gridAnim)

        return () => window.removeEventListener("scroll",gridAnim)
    },[])
    return (
        <div className="grid-component-wrapper">
            <div className='text-cont-grid'>
                OUR WORKS
            </div>
            <div className='img-grid'>
                <div className='grid-frame'>
                {
                    img.map((el,index)=>(
                        <div key={index} className={`grid-column${index===1?" center-column":" side-column"}`}>
                            {el.map((img,ind)=>(
                                <div key={ind+index} className={`grid-el${index===1?" is-cen":""}${index===1&&ind===1?" is-main":""}`} style={{backgroundImage:`url(${img})`}}>
                                    {ind ===1&&index===1?<div className='main-text'>
                                            <div className='grid-MainText'><p>Redefine Exhibition Excellence</p></div>
                                            <div className='grid-PortBtn' onClick={() => window.open("./Portfolio", "_self")}>View Our Portfolio <ArrowRightAlt sx={{fontSize:document.documentElement.clientWidth>480?45:70,marginTop:0.15}}/></div>
                                    </div>:""}
                                </div>
                            ))}
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default GridScroll