import React from 'react'
import emailjs from '@emailjs/browser';
import '../stylesheets/BlogForm.css'

const BlogForm = () => {
    const send = () => {
    let name = document.getElementById("blogFormName").value;
    let bSize = document.getElementById("blogFormBSize").value;
    let email = document.getElementById("blogFormEmail").value;
    let eName = document.getElementById("blogFormEName").value;
    let pNumber = document.getElementById("blogFormPhone").value;
    let message = document.getElementById("blogFormMessage").value;
    let params = {
      name: name,
      email: email,
      message: `Email: ${email}\nName: ${name}\nBooth Size: ${bSize}\nCExhibition Name: ${eName}\nPhone Number: ${pNumber}\n\n${message}`
    }
    emailjs.send("service_fbpufe9", "template_3i3mya4", params, "VUamv5N3Fwdw8YVar").then((res) => alert("Mail sent successfully."), (err) => alert("The mail could not be sent " + err))
  }
  return (
    <div>
        <div className='blogFormContainer'>
          <p id='blogFormTitle'>Ask for a Quotation</p>
            <input type="text" id='blogFormName' className='blogFormInput' placeholder='Contact Name'/>
            <input type="text" id='blogFormEmail' className='blogFormInput' placeholder='Email Address'/>
            <input type="text" id='blogFormPhone' className='blogFormInput' placeholder='Mobile Phone'/>
            <input type="text" id='blogFormEName' className='blogFormInput' placeholder='Exhibition Name'/>
            <input type="text" id='blogFormBSize' className='blogFormInput' placeholder='Booth Size'/>
            <input type="text" id='blogFormMessage' className='blogFormInput' placeholder='Message'/>
            <button type='button' id='blogFormSubmitButton' onClick={send}>Submit</button>
        </div>
    </div>
  )
}

export default BlogForm