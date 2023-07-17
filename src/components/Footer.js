import "../stylesheets/Footer.css"
import imgLogo from "../assets/images/logo.png"
import { Email, CopyrightRounded, Instagram, LinkedIn } from "@mui/icons-material"

const Footer = () => {
    return(
        <div className="footer-Wrapper">
            <div className="footer-Text">
                <div className="footer-links">
                <a href="/">Back to top</a>
                <a href="/">Home</a>
                <a href="/AboutUs">About us</a>
                <a href="/Portfolio">Portfolio</a>
                <a href="/Services">Services</a>
                <a href="/ContactUs">Contact Us</a>
                </div>
                <div className="footer-Info">
                    <span className="footer-Comp">Suprano Exhibits</span>
                    <span className="footer-Tag">Ideas to Implementation</span>
                    <span className="footer-Soc"><LinkedIn sx={{fontSize:40}} onClick={() => window.open("https://www.linkedin.com/company/suprano-1exhibits/")}/><Instagram sx={{fontSize:40}} onClick={() => window.open("https://instagram.com/supranoexhibits?igshid=NTc4MTIwNjQ2YQ==")} /><Email sx={{fontSize:40}} onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=info@supranoexhibits.com")}/></span>
                </div>
            </div>
            <div className="footer-Image">
                <div className="footer-blur">
                <img className="footer-Logo" src={imgLogo} alt='blurredImage'></img>
                <span className="cc-Text"><p><CopyrightRounded sx={{fontSize:20}}/>Suprano Exhibits 2023</p><a href="https://www.prosgro.com">Made by ProsGro</a></span>
                </div>
            </div>
        </div>
    )
}

export default Footer