import { ArrowForwardSharp } from '@mui/icons-material'
import emailjs from '@emailjs/browser';
import '../stylesheets/ContactUs.css'

const ContactUs = () => {


  const send = () => {
    let name = document.getElementById("homePageContactFormName").value;

    let email = document.getElementById("homePageContactFormEmail").value;
    let cName = document.getElementById("homePageContactFormCName").value;
    let message = document.getElementById("homePageContactFormMessage").value;
    let params = {
      name: name,
      email: email,
      message: `Hey! My name is ${name}, my email id is ${email}. My company name is ${cName}. My message is ${message}`
    }
    emailjs.send("service_fbpufe9", "template_3i3mya4", params, "VUamv5N3Fwdw8YVar").then((res) => alert("Mail sent successfully."), (err) => alert("The mail could not be sent " + err))
  }


  return (
    <div className='contact-Container wd-Selector' id='contactFormContainer'>
      <div className='contact-Title'>
        <span className='contact-Big'>Get in Touch</span>
      </div>
      <div className='contact-Form'>
        Hey! my name is <input type='text' id='homePageContactFormName' className='con-Inp' size={document.documentElement.clientWidth>480?12:35}></input>,  my Email Id is <input type='email' id='homePageContactFormEmail' className='con-Inp' size={document.documentElement.clientWidth>480?20:35}></input>,<br></br>
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