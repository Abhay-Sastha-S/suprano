import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../stylesheets/BlogThumbnail.css"

const BlogThumbnail = ({ content }) => {

  const navigate = useNavigate();

  return (
    <div className='blogThumbnailContainer' style={{backgroundImage: `url(${content.image})`}} onClick={() => navigate(`/${content.url}`)}>
        <div className='blogThumbnailContentContainer'><p className='blogThumbnailTitle'>{content.title}</p></div>
    </div>
  )
}

export default BlogThumbnail