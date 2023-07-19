import { React } from 'react'
import '../stylesheets/BlogPage.css'
import BlogForm from './BlogForm'

const BlogContent = ( { content } ) => {
  const setIframeHeight = () => {
    let iframe = document.getElementById("blogContent")
    console.log("SIJI")
    iframe.height = iframe.contentWindow.document.body.scrollHeight + 100
  }
  return (
    <div id='blogContentContainer'>
      <iframe id='blogContent' srcDoc={content.content} onLoad={setIframeHeight} title='blog'></iframe>
      <BlogForm />
    </div>
  )
}

export default BlogContent