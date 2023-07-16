import { useEffect } from 'react'
import '../stylesheets/Frame.css'

//variables
let ImgDiv = [1,2,3]
const slide1 = `At Suprano Exhibits, we specialise in delivering thorough and futuristic exhibition services globally. Our creative teams work resolutely to craft enthralling designs, and our production team brings precision to our services that will make your experience worthwhile. Our unparalleled warehousing facilities and cutting-edge design prowess provide us with a distinctive advantage in curating exhibitions of exceptional caliber.`
const slide2 = "At Suprano Exhibits, our unwavering vision is to establish ourselves as the foremost global leader in the exhibition industry. We aspire to be the preferred partner for discerning clients seeking unrivaled innovation, flawless execution, and uncompromising quality. Through our relentless commitment to excellence, we aim to redefine industry benchmarks, leaving a lasting impact that resonates with audiences on a global scale."
const slide3 = "At Suprano Exhibits, we offer a comprehensive range of services tailored to meet your exhibition needs. Our expertise includes custom exhibition design and built, 3D exhibition stall design, exhibition stall fabrication, project implementation, international exhibition stall design, and portable modular exhibition stall solutions. With our commitment to excellence, we ensure seamless execution and create visually stunning and engaging experiences that captivate your target audience."
const headerar = ["Perfection is in precision","Our Vision","Services"]
const textar = [slide1,slide2,slide3]

export const LeftScroll = () => {
    useEffect(()=>{
        var wrap = document.querySelector('.Left-Scroll-Wrapper')
        var Comps = document.querySelectorAll(".image")
        var CompsTxt = document.querySelectorAll(".text")
        
        const ScrollEff = () => {
            let i = 0    
            var scrollPerc = -wrap.getBoundingClientRect().y
            var ScrollNum = (((scrollPerc)/document.documentElement.clientHeight)>1.99?2:((scrollPerc)/document.documentElement.clientHeight)<0?0:((scrollPerc)/document.documentElement.clientHeight))

            Comps.forEach((el,index)=>{
                CompsTxt[i].style.transform = document.documentElement.clientWidth>480?`translateX(-${0 + ScrollNum*100}%)`:`translateY(-${0+ScrollNum*100}%)`
                i++
                el.style.transform = `translateY(-${0+ScrollNum*100}%)`
            })            
        }
            ScrollEff()
            window.addEventListener("scroll",ScrollEff)

        return () => window.removeEventListener("scroll",ScrollEff)
    },[])
        
    
    return(
        
        <div className='Left-Scroll-Wrapper'>
            <div className='stick stick-div'>
            <div className='frame'>
        <div className='img-Wrapper'>
    {ImgDiv.map((e,index) => (
        <div key={index} className = {`image image${e}`}></div>
        ))}
        </div>
        <div className='text-Wrapper'>
        {
            ImgDiv.map((e,index)=>(
                <div key={index} className='text'><div className='flexClass'><div className='text-cont'><p className='header' style={{fontSize:document.documentElement.clientWidth>480?index===0?"4.5vw":"5.4vw":index===0?"11vw":"14vw"}}>{headerar[index]}</p><div className='image-text'>{textar[index]}</div></div></div></div>
                ))
            }
        </div>
    
    </div>
    </div>
    </div>
    )
}