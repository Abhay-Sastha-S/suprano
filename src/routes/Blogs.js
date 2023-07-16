import React from 'react'
import NavBar from '../components/NavBar'
import BlogThumbnail from '../components/BlogThumbnail'
import Menu from '../components/Menu'
import { BlogsList } from '../BlogsList'
import "../stylesheets/prep.css"
import "../stylesheets/Blogs.css"

const Blogs = () => {
    const showMenu = () => {
        document.getElementById("menuContainer").style.zIndex = "998";
        document.getElementById("menuContainer").style.opacity = "1";
        let coll = document.getElementsByClassName("menuLink");
        for (let i = 0; i < coll.length; i++) {
            coll[i].style.animationDelay = `${i * 0.1}s`
            coll[i].classList.add("animate")
        }
      }
    
      const hideMenu = () => {
        document.getElementById("menuContainer").style.zIndex = "-8";
        document.getElementById("menuContainer").style.opacity = "0";
        let coll = document.getElementsByClassName("menuLink");
        for (let i = 0; i < coll.length; i++) {
            coll[i].classList.remove("animate")
        }
      }
  return (
    <div className='mainBlogsContainer'>
        <NavBar showMenu={showMenu} />
      <Menu hideMenu={hideMenu} />
      <p className='blogsHeader'>Our Blogs</p>
      <div className='blogThumbnailsContainer'>
        {BlogsList.blogs.map(blog => <BlogThumbnail content={blog} key={blog.id}/>)}
        </div>
    </div>
  )
}

export default Blogs