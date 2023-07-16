import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import ServicesGrid from "../components/ServicesGrid"
import ServicesHeader from "../components/ServicesHeader"
import "../stylesheets/prep.css"
import Menu from "../components/Menu"
import { Helmet } from "react-helmet"


export const Services = () => {
    const showMenu = () => {
        document.getElementById("menuContainer").style.zIndex = "998";
        document.getElementById("menuContainer").style.opacity = "1";
        let coll = document.getElementsByClassName("menuLink");
        for (let i = 0; i < coll.length; i++) {
            coll[i].style.animationDelay = `${i * 0.1}s`
            coll[i].classList.add("animate")
        }
      }
    
      const hideMenu = () => {
        document.getElementById("menuContainer").style.zIndex = "-8";
        document.getElementById("menuContainer").style.opacity = "0";
        let coll = document.getElementsByClassName("menuLink");
        for (let i = 0; i < coll.length; i++) {
            coll[i].classList.remove("animate")
        }
      }
    return(
        <div className="service-Wrapper">
            <Helmet>
                <title>Professional Exhibition Services | Suprano Exhibits</title>
                <meta name="description" content="Suprano Exhibits offers comprehensive exhibition services, including booth design and construction, event management, project management, booth execution and dismantling, trade show logistics, graphic design, audio-visual integration, lighting solutions, and booth maintenance. Elevate your brand's presence with our expert services."></meta>
            </Helmet>
            <div className="keywords" style={{display:"none"}}>
            Exhibition booth design and construction
                Custom trade show booth solutions
                Event management and execution services
                Exhibition project management
                Booth execution and dismantling
                Trade show logistics and planning
                Graphic design and branding services
                Audio-visual and technology integration
                Lighting and visual effects solutions
                Booth maintenance and storage services
            </div>
            <NavBar showMenu={showMenu} />
            <Menu hideMenu={hideMenu}/>
            <ServicesHeader />
            <ServicesGrid />
            <Footer />
        </div>
    )
}