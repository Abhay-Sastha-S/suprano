import "../stylesheets/prep.css"
import "../stylesheets/ContactUsFloater.css"
import { PhoneEnabled } from "@mui/icons-material"

const ContactUsFloater = () => {
    return(
        <a className="floater-Wrapper" href="#contactUsFormContainer">
            <PhoneEnabled sx={{fontSize:45}} />
        </a>
    )
}

export default ContactUsFloater