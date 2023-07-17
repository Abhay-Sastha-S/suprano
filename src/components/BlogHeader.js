import React from 'react'
import '../stylesheets/prep.css'
import '../stylesheets/BlogPage.css'
import {Helmet} from "react-helmet"

const BlogHeader = ( { content } ) => {
  return (
    <div id='mainBlogContainer'>
      <Helmet>
        <title>{content.pt}</title>
        <meta name='description' content={content.desc}></meta>
      </Helmet>
      <div id='blogHeaderContainer' style={{backgroundImage:`url(${content.image})`,backgroundPosition:"center",backgroundSize:"cover",backgroundColor:"rgba(10,10,10,0.6)",backgroundBlendMode:"multiply"}}>
        <p className='blogHeaderTitle'>{content.pt}</p>
      </div>
    </div>
  )
}

export default BlogHeader