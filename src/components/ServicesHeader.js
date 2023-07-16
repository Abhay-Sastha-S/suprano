import {ArrowRightAlt, AutoAwesome } from "@mui/icons-material"
import "../stylesheets/ServicesHeader.css"

const ServicesHeader = () => {
    return(
        <div className="serHead-Wrapper">
            <div className="serImg-Cont">
                <span className="serImg-Title">Services</span>
                <div className="serImg imgCont"></div>
            </div>
            <div className="serDesc-Cont">
                <div className="serDesc">Discover unparalleled elegance and sophistication in booth construction services. Our meticulous craftsmanship and attention to detail create captivating spaces that seamlessly blend form and function. Unlock a world of possibilities with our comprehensive range of services. From custom designs to flawless execution, we ensure an unforgettable experience for exhibitors and visitors alike.</div>
                <a href="/Portfolio" className="serBtn">
                    <span>Our Works</span><ArrowRightAlt className="icon" sx={{fontSize:80}}/>
                </a>
            </div>
            <div className="serTag">
                <AutoAwesome className="icon" sx={{fontSize:50}}/>
                <span>Tailored Exhibition Solutions</span>
                <AutoAwesome className="icon" sx={{fontSize:50}}/>
            </div>
        </div>
    )
}

export default ServicesHeader