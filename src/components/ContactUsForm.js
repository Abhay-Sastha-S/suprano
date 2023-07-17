import React from 'react'
import emailjs from '@emailjs/browser';
import '../stylesheets/ContactUsForm.css'

const ContactUsForm  = () => {

  const send = () => {
    let fName = document.getElementById("contactUsFormFName").value;
    let lName = document.getElementById("contactUsFormLName").value;
    let jT = document.getElementById("contactUsFormJT").value;
    let email = document.getElementById("contactUsFormEMail").value;
    let cName = document.getElementById("contactUsFormCName").value;
    let pNumber = document.getElementById("contactUsFormPNumber").value;
    let message = document.getElementById("contactUsFormMessage").value;
    let params = {
      name: fName + " " + lName,
      email: email,
      message: `Email: ${email}\nName: ${fName + lName}\nJob Title: ${jT}\nCompany Name: ${cName}\nPhone Number: ${pNumber}\n\n${message}`
    }
    emailjs.send("service_fbpufe9", "template_3i3mya4", params, "VUamv5N3Fwdw8YVar").then((res) => alert("Mail sent successfully."), (err) => alert("The mail could not be sent " + err))
  }

  return (
    <div id='contactUsFormContainer'>
        <div id='contactUsFormInfo'>
            <p id='contactUsFormH1'></p><br />
            <p id='contactUsFormP1'>Reach out to us today to discuss your specific requirements and discover how our expertise can deliver exceptional exhibition experiences tailored to your needs.</p><br /><br />
            <p id='contactUsFormEmail'>info@supranoexhibits.com</p><br /><br /> 
            <p className='contactUsFormAddressTitle'>Headquarters:</p><br />
            <p className='contactUsFormAddressDesc'>Office 2309<br />Prism Tower Business Bay
Dubai<br />UAE</p>
<br /><br />
            <span className='contactUsFormAddressTitle'>Phone: <p className='contactUsFormAddressDesc'>+971 528617600</p></span><br /><br />
            
        </div>
        <div id='contactUsForm'>
            
            <p className='contactUsFormInputLabel'>First Name</p>
            <input type="text" id='contactUsFormFName' className='contactUsFormInput'/>
            <br />
            <p className='contactUsFormInputLabel'>Last Name</p>
            <input type="text" id='contactUsFormLName' className='contactUsFormInput'/>
            <br />
            <p className='contactUsFormInputLabel'>Job Title</p>
            <input type="text" id='contactUsFormJT' className='contactUsFormInput'/>
            <br />
            <p className='contactUsFormInputLabel'>Email</p>
            <input type="text" id='contactUsFormEMail' className='contactUsFormInput'/>
            <br />
            <p className='contactUsFormInputLabel'>Company Name</p>
            <input type="text" id='contactUsFormCName' className='contactUsFormInput'/>
            <br />
            <p className='contactUsFormInputLabel'>Phone Number</p>
            <input type="text" id='contactUsFormPNumber' className='contactUsFormInput'/>
            <br />
            <p className='contactUsFormInputLabel'>Message</p>
            <input type="text" id='contactUsFormMessage' className='contactUsFormInput'/>
            
            <br />
            <button type='button' id='contactUsSendButton' onClick={send}>Send</button>
        </div>
    </div>
  )
}

export default ContactUsForm