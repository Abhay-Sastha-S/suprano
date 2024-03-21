import React from "react";
import '../stylesheets/prep.css'
import ContactUsHeader from '../components/ContactUsHeader'
import Footer from "../components/Footer"
import NavBar from "../components/NavBar";
import Menu from "../components/Menu";
import ContactUsForm from "../components/ContactUsForm";
import ContactUsFloater from "../components/ContactUsFloater"
import { Helmet } from "react-helmet";

export const ContactUsPage = () => {
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
        <div>
            <Helmet>
            <title>Suprano Exhibits</title>
        <meta name='description' content='Suprano Exhibits is a top exhibition stand builder in Middle East, specializing in innovative exhibition booth design, fabrication, and event management services. '/>
        <meta name='og:title' content='Suprano Exhibits.'/>
        <meta name='og:description' content='Suprano Exhibits is a top exhibition stand builder in Middle East, specializing in innovative exhibition booth design, fabrication, and event management services.'/>
        <link rel='canonical' href='http://localhost:3000/'></link>
        <meta name='og:type' content='website'/>
        <meta name='og:image' content='/test_files/test.png.ico'/>
        <meta name='og:url' content='https://supranoexhibits.com/'/>
            </Helmet>
            <div className="keyword" style={{display:"none"}}>
            Hire the Best Exhibition Booth Design Services in Dubai	
            Expert Dubai Exhibition Booth Designers at Your Service	
            Leading Exhibition Booth Construction Company in UAE	
            Europe's Top Exhibition Stand Builder for Unparalleled Results	
            Professional Exhibition Project Management Services	
            Seamless Exhibition Booth Execution and Dismantling Solutions	
            Elevate Your Events with Exceptional Event Management Services in Dubai	
            Custom Exhibition Booth Design Tailored to Your Brand's Success	
            Transform Your Presence with Premium Trade Show Booth Services in Dubai	
            Trusted Exhibition Booth Contractors in UAE for Flawless Execution	
            Hire the Best Exhibition Booth Design Services in UAE	
            Hire the Best Exhibition Booth Design Services in Europe	
            Hire the Best Exhibition Booth Design Services in Middle East	
            Hire the Best Exhibition Booth Design Services in North and South America	
            Expert Europe Exhibition Booth Designers at Your Service	
            Expert Middle East Exhibition Booth Designers at Your Service	
            Expert North and South America Exhibition Booth Designers at Your Service	
            Expert UAE Exhibition Booth Designers at Your Service	
            Leading Exhibition Booth Construction Company in Europe	
            Leading Exhibition Booth Construction Company in Middle East	
            Leading Exhibition Booth Construction Company in North and South America	
            Europe's Top Exhibition Stand Builder for Unparalleled Results	
            Middle East Top Exhibition Stand Builder for Unparalleled Results	
            North & South America Top Exhibition Stand Builder for Unparalleled Results	
            Elevate Your Events with Exceptional Event Management Services in Europe	
            Elevate Your Events with Exceptional Event Management Services in Middle East	
            Elevate Your Events with Exceptional Event Management Services in North and South America	
            Elevate Your Events with Exceptional Event Management Services in UAE	
            Transform Your Presence with Premium Trade Show Booth Services in UAE	
            Transform Your Presence with Premium Trade Show Booth Services in Middle East	
            Transform Your Presence with Premium Trade Show Booth Services in Europe	
            Transform Your Presence with Premium Trade Show Booth Services in North and South America
            </div>
            <NavBar showMenu={showMenu} />
            <Menu hideMenu={hideMenu}/>
            <ContactUsFloater />
            <ContactUsHeader />
            <ContactUsForm />
            <Footer />
        </div>
    )
}