import '../stylesheets/ImgFix.css'
import { useEffect } from 'react'




export const ImgFix = () => {

    useEffect(()=>{
        const WrpTot = document.querySelector(".Img-Fix-Wrapper")
        const ImgWrp = document.querySelector(".MainImg")
        const ImgTxt = document.querySelector(".text-selector-class")
        const ImgAnim = (ImgWrp) => {
            var ScrollPercent = (1 - ImgWrp.getBoundingClientRect().y/document.documentElement.clientHeight)>0.9999?1:(1 - ImgWrp.getBoundingClientRect().y/document.documentElement.clientHeight)<0.02?0:(1 - ImgWrp.getBoundingClientRect().y/document.documentElement.clientHeight)
            ImgWrp.classList.toggle("Fixed-bg",ScrollPercent === 1)
            ImgTxt.classList.toggle("Img-text-fix",ScrollPercent > 0.6)
            ImgWrp.style.height = `${40 + ScrollPercent*60}vh`
            ImgWrp.style.width = `${document.documentElement.clientWidth>480?30 + ScrollPercent*70:100}%`
        } 

        const TxtScrollEff = () => {
            if(WrpTot.getBoundingClientRect().top<0){
                ImgAnim(ImgWrp)
            }
            var ScrollFrac = ((WrpTot.getBoundingClientRect().y)/document.documentElement.clientHeight)<0?0:((WrpTot.getBoundingClientRect().y)/document.documentElement.clientHeight)>1?1:((WrpTot.getBoundingClientRect().y)/document.documentElement.clientHeight)
            document.body.style.setProperty("--scroll",(1-ScrollFrac)/2)
        }
        TxtScrollEff()
        window.addEventListener("scroll",TxtScrollEff)

        return () => window.removeEventListener("scroll",TxtScrollEff)
    },[])

    return(
        <div className='Img-Fix-Wrapper'>
            <div className="WrapperTxt Anim">
                <p className='MainText'>Your Vision</p>
            </div>
            <div className='MainImg'>
                <div className='text-selector-class'><p>Our Expertise</p></div>
        </div>
        </div>
    )
}