import React from 'react'
import BlogHeader from '../components/BlogHeader';
import NavBar from '../components/NavBar'
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import BlogContent from '../components/BlogContent';
import Helmet from 'react-helmet';
const BlogTemplate = ({ content }) => {
  console.log(content)
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
    <div id='blogParentContainer'>
    <Helmet>
    <title>Suprano Exhibits</title>
        <meta name='description' content='Suprano Exhibits is a top exhibition stand builder in Middle East, specializing in innovative exhibition booth design, fabrication, and event management services. '></meta>
      <meta name='og:title' content='Suprano Exhibits.'></meta>
        <meta name='og:description' content='Suprano Exhibits is a top exhibition stand builder in Middle East, specializing in innovative exhibition booth design, fabrication, and event management services.'></meta>
        <link rel='canonical' href='http://localhost:3000/'></link>
        <meta name='og:type' content='website'></meta>
        <meta name='og:image' content='/test_files/test.png.ico'></meta>
        <meta name='og:url' content='https://supranoexhibits.com/'></meta>
    </Helmet>
        <NavBar showMenu={showMenu} />
      <Menu hideMenu={hideMenu} />
      <BlogHeader content={content}/>
      <BlogContent content={content} />
      <Footer />
    </div>
  )
}

export default BlogTemplate