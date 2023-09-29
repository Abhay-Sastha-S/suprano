import React, { useEffect } from 'react'
import {Helmet} from "react-helmet"
import '../stylesheets/prep.css'
import {LeftScroll} from '../components/LeftScroll'
import {ImgFix} from '../components/ImgFix'
import SlideShow from '../components/SlideShow'
import ThemeMarquee from '../components/ThemedMarquee'
import Intro from '../components/Intro'
import GridScroll from '../components/GridScroll'
import NavBar from '../components/NavBar'
import ContactUs from '../components/ContactUs'
import SlantedText from '../components/SlantedText'
import Whatdo from '../components/Whatdo'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

//Intersection observer
const obs_int_text = new IntersectionObserver((entries)=>{
  entries.forEach(element => {
      element.target.classList.toggle("text-Anim",element.isIntersecting)
      if(element.isIntersecting)obs_int_text.unobserve(element.target)
  },)
},{
  threshold:document.documentElement.clientWidth>480?0.5:0.8,
})


const obs_int_txt = new IntersectionObserver((entries)=>{
  entries.forEach(el=>{
    el.target.classList.toggle("text-Dec",el.isIntersecting && document.documentElement.clientWidth>480)
    if(el.isIntersecting)obs_int_txt.unobserve(el.target)
  })
},{
  threshold:1,
})

const obs_int_img = new IntersectionObserver((entries)=>{
  entries.forEach(element => {
      element.target.classList.toggle("img-Anim",element.isIntersecting && document.documentElement.clientWidth>480)
      if(element.isIntersecting)obs_int_img.unobserve(element.target)
  },)
},{
  threshold:0.55,
})

const obs_sln_comp = new IntersectionObserver((entries)=>{
  entries.forEach(el=>{
    el.target.classList.toggle("anim-deets",el.isIntersecting)
    if(el.isIntersecting)obs_sln_comp.unobserve(el.target)
  })
},{
  threshold:0.4,
})

const obs_wd_comp = new IntersectionObserver(entries=>{
  entries.forEach(el=>{
    el.target.classList.toggle("anim-deets",el.isIntersecting)
    if(el.isIntersecting)obs_wd_comp.unobserve(el.target)
  })
},{
  threshold:0.4,
})

export const HomePage = () => {
  useEffect(()=>{
    // intersection observer
    const Intro_text = document.querySelector(".intro-CompText")
    const Intro_img = document.querySelectorAll(".intro-ImageWrapper")
    const Child_intro = document.querySelectorAll(".slant-Selector")
    const Child_wd = document.querySelectorAll(".wd-Selector")
    obs_int_text.observe(Intro_text)
    obs_int_txt.observe(Intro_text)
    Intro_img.forEach(el=>{
      obs_int_img.observe(el)
    })
    Child_intro.forEach(el=>{
      obs_sln_comp.observe(el)
    })
    Child_wd.forEach(el=>{
      obs_wd_comp.observe(el)
    })
    
  },[])

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
    <div className='root-div'>
      <Helmet>
      
    <title>Suprano Exhibits</title>
        <meta name='description' content='Suprano Exhibits is a top exhibition stand builder in Middle East, specializing in innovative exhibition booth design, fabrication, and event management services. '></meta>
      <meta name='og:title' content='Suprano Exhibits.'></meta>
        <meta name='og:description' content='Suprano Exhibits is a top exhibition stand builder in Middle East, specializing in innovative exhibition booth design, fabrication, and event management services.'></meta>
        <link rel='canonical' href='http://localhost:3000/'></link>
        <meta name='og:type' content='website'></meta>
        <meta name='og:image' content='https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw3xxiDoyf7FqKdXy2u_nIMJ&ust=1696078425128000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJDkltLuz4EDFQAAAAAdAAAAABAE'></meta>
        <meta name='og:url' content='http://localhost:3000/'></meta>
   
      </Helmet>
      <div className="keyword" style={{display:"none"}}>
      Exhibition booth construction company
      Top exhibition stand builder in Middle East
      Exhibition booth design and fabrication
      Custom trade show booth solutions
      Leading exhibition booth contractor
      Event management and execution services
      Innovative exhibition booth designs
      Premier exhibition booth builder in Middle East
      Professional exhibition services
      </div>
      <NavBar showMenu={showMenu} />
      <Menu hideMenu={hideMenu}/>
      <SlideShow />
      <ThemeMarquee />
      <Intro />
      <SlantedText />
      <ImgFix />
      <Whatdo />
      <LeftScroll />
      <GridScroll />
      <ContactUs />
      <Footer />
    </div>
  )
}