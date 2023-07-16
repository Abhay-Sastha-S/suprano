import { React, useEffect } from 'react'
import '../stylesheets/BlogPage.css'
import BlogForm from './BlogForm'

const BlogContent = ( { content } ) => {
  useEffect(() => {
    document.getElementById("blogContent").innerHTML = content.content;
  }, [content.content])
  return (
    <div id='blogContentContainer'>
      <p id='blogContent'></p>
      <BlogForm />
    </div>
  )
}

export default BlogContent