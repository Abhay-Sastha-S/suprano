import React from 'react'
import '../stylesheets/prep.css'
import '../stylesheets/BlogPage.css'

const BlogHeader = ( { content } ) => {
  return (
    <div id='mainBlogContainer'>
      <div id='blogHeaderContainer'>
        <p className='blogHeaderTitle'>{content.title}</p>
      </div>
    </div>
  )
}

export default BlogHeader