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
            <title>Suprano Exhibits</title>
        <meta name='description' content='Suprano Exhibits is a top exhibition stand builder in Middle East, specializing in innovative exhibition booth design, fabrication, and event management services. '></meta>
      <meta name='og:title' content='Suprano Exhibits.'></meta>
        <meta name='og:description' content='Suprano Exhibits is a top exhibition stand builder in Middle East, specializing in innovative exhibition booth design, fabrication, and event management services.'></meta>
        <link rel='canonical' href='http://localhost:3000/'></link>
        <meta name='og:type' content='website'></meta>
        <meta name='og:image' content='/test_files/test.png.ico'></meta>
        <meta name='og:url' content='https://supranoexhibits.com/'></meta>
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