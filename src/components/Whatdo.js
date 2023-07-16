import { useEffect } from 'react'
import '../stylesheets/Whatdo.css'

const Whatdo = () => {
    useEffect(()=>{
        const WwdWrp = document.querySelector(".whatdo-Wrapper")
        const TxtScrollEff = () => {
            var WwdScr = ((WwdWrp.getBoundingClientRect().y)/document.documentElement.clientHeight)<0?0:((WwdWrp.getBoundingClientRect().y)/document.documentElement.clientHeight)>1?1:((WwdWrp.getBoundingClientRect().y)/document.documentElement.clientHeight)
            if(WwdScr<1)document.body.style.setProperty("--scroll",((1 - WwdScr)/2)+0.5)
            
        }
        TxtScrollEff()
        window.addEventListener("scroll",TxtScrollEff)

        return () => window.removeEventListener("scroll",TxtScrollEff)
    },[])
    return(
        <div className="whatdo-Wrapper">
            <div className='whatdo-Text'>
                <div className='whatdo-Title wd-Selector'>What We Do</div>
                <div className='whatdo-desc wd-Selector'>
                At Suprano Exhibits, we specialize in delivering comprehensive turnkey exhibition services on a global scale. Our dedicated creative teams collaborate closely to craft captivating designs, while our meticulous production team attends to every intricate detail, ensuring an unforgettable experience for you. With our own state-of-the-art warehouses and design facilities, we possess a distinct advantage in providing unparalleled quality.<br />As one of the foremost exhibition booth construction companies in Europe,Middle East,Asia and North and South America , we take pride in our team of experienced designers and project managers who go above and beyond to cater to all your booth requirements. Our goal is to ensure that you have a prolific experience, and we are committed to delivering excellence every step of the way.
                </div>
            </div>
            <div className='whatdo-Image wd-Selector'>
            </div>
        </div>
    )
}

export default Whatdo