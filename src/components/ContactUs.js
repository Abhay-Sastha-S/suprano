import { ArrowForwardSharp } from '@mui/icons-material'
import emailjs from '@emailjs/browser';
import '../stylesheets/ContactUs.css'

const ContactUs = () => {


  const send = () => {
    let name = document.getElementById("homePageContactFormName").value;

    let email = document.getElementById("homePageContactFormEmail").value;
    //let cName = document.getElementById("homePageContactFormCName").value;
    //let message = document.getElementById("homePageContactFormMessage").value;
    let params = {
      name: name,
      email: email,
      message: "Hello There"
    }
    emailjs.send("service_hzdk9yt", "template_mlrk7ig", params, "iGdJ0bUGV0_pZC_LC").then((res) => alert("Mail sent successfully."), (err) => alert("The mail could not be sent."))
  }


  return (
    <div className='contact-Container wd-Selector' id='contactFormContainer'>
      <div className='contact-Title'>
        <span className='contact-Big'>Get in Touch</span>
      </div>
      <div className='contact-Form'>
        Hey! my name is <input type='text' id='homePageContactFormName' className='con-Inp' size={12}></input>,  my Email Id is <input type='email' id='homePageContactFormEmail' className='con-Inp' size={20}></input>,<br></br>
        My Company's name is <input type='text' id='homePageContactFormCName' className='con-Inp'></input>and<br></br>
        My message is <input type='text' id='homePageContactFormMessage' className='con-Inp' size={45}></input>.
      </div>
      <div className='contact-BtnCont'>
        <div className='contact-Btn' onClick={send}>Submit <ArrowForwardSharp sx={{fontSize:30}}/></div>
      </div>
    </div>
  )
}

export default ContactUs