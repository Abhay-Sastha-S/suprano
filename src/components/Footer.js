import "../stylesheets/Footer.css"
import imgLogo from "../assets/images/logo.png"
import { AlternateEmail, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material"

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
                    <span className="footer-Soc"><LinkedIn sx={{fontSize:40}} onClick={() => window.open("https://www.linkedin.com/company/suprano-1exhibits/")}/><Instagram sx={{fontSize:40}} onClick={() => window.open("https://instagram.com/supranoexhibits?igshid=NTc4MTIwNjQ2YQ==")} /><AlternateEmail sx={{fontSize:40}} onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=info@supranoexhibits.com")}/><WhatsApp  sx={{fontSize:40}} onClick={() => {
                        navigator.clipboard.writeText("+91 9953087077")
                }}/></span>
                </div>
            </div>
            <div className="footer-Image">
                <div className="footer-blur">
                <img className="footer-Logo" src={imgLogo} alt='blurredImage'></img>
                </div>
            </div>
        </div>
    )
}

export default Footer