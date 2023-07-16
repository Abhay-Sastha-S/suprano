import React from 'react'
import '../stylesheets/BlogForm.css'
const BlogForm = () => {
  return (
    <div>
        <div className='blogFormContainer'>
          <p id='blogFormTitle'>Ask for a Quotation</p>
            <input type="text" className='blogFormInput' placeholder='Contact Name'/>
            <input type="text" className='blogFormInput' placeholder='Company Name'/>
            <input type="text" className='blogFormInput' placeholder='Email Address'/>
            <input type="text" className='blogFormInput' placeholder='Mobile Phone'/>
            <input type="text" className='blogFormInput' placeholder='Exhibition Name'/>
            <input type="text" className='blogFormInput' placeholder='Booth Size'/>
            <input type="text" className='blogFormInput' placeholder='Message'/>
            <button type='button' id='blogFormSubmitButton'>Submit</button>
        </div>
    </div>
  )
}

export default BlogForm