import React, { useEffect } from 'react'
import WorldMap from '../components/WorldMap'
import '../stylesheets/AboutUsBody.css'
import AnimatedText from './AnimatedText'

const txt_fade_side = new IntersectionObserver((elements)=>{
    elements.forEach((el)=>{
        el.target.classList.toggle("anim-fade-left",el.isIntersecting)
        if(el.isIntersecting)txt_fade_side.unobserve(el.target)
    })
},{
    threshold:0.8
})

const txt_fade_up = new IntersectionObserver((elements)=>{
    elements.forEach((el)=>{
        el.target.classList.toggle("anim-fade-up",el.isIntersecting)
        if(el.isIntersecting)txt_fade_up.unobserve(el.target)
    })
})

const AboutUsBody = () => {
    useEffect(()=>{
        const heading = document.querySelectorAll(".sel-head")
        const desc = document.querySelectorAll(".sel-desc")

        heading.forEach((el)=>{
            txt_fade_side.observe(el)
        })

        desc.forEach((el)=>{
            txt_fade_up.observe(el)
        })
    },[])
  return (
    <div>
        <div className='aboutUsBodyText'>
            <div className='aboutUsBodyTitleCont typewrite'>
                <AnimatedText />
            </div>
            <p className='aboutUsBodyDesc sel-desc'>Here at Suprano, we aren't afraid of putting in some elbow grease to get perfection. We'll go the extra mile to create stunning showstoppers. Our designs stand the test of time, through thick and thin. Weaving out immersive experience for years, we may have changed our style throughout the years but our commitment and dedication has remained constant.</p>
        </div>
        <div className='aboutUsBodyText'>
            <div className='aboutUsBodyTitleCont sel-head'>
                <p className='aboutUsBodyTitle'>Creating </p>
                <p className='aboutUsBodyTitle blue'>Stories,</p>
                <p className='aboutUsBodyTitle'> One Experience at a Time</p>
            </div>
            <p className='aboutUsBodyDesc sel-desc'>We love discovering what makes your brand unique. Each facet is a part of a story we begin to piece together with our exhibits. Each display is a symphony of storytelling, drawing you into enchanting realms where imagination dances with reality.</p>
        </div>
        <div className='aboutUsBodyTextLight'>
            <div className='aboutUsBodyTitleCont sel-head'>
                <p className='aboutUsBodyTitleLight'>Better</p>
                <p className='aboutUsBodyTitleLight blue'>. </p>
                <p className='aboutUsBodyTitleLight'>Stronger</p>
                <p className='aboutUsBodyTitleLight blue'>. </p>
                <p className='aboutUsBodyTitleLight'>Together</p>
                <p className='aboutUsBodyTitleLight blue'>.</p>
            </div>
            <p className='aboutUsBodyDescLight sel-desc'>We are an assemblage of designers, thinkers and innovators. Uncompromising in our pursuit of perfection, Suprano upholds a standard of unparalleled quality service. With an unwavering commitment to excellence, we bring together sophistication and functionality, ensuring that our distinguished clientele receive nothing less than the finest bespoke creations. From conceptualization to execution, we analyze every detail without cutting any corners. Carefully crafting visual marvels that transcend time, our designers embrace every curve, texture, and detail to create masterpieces of your dreams. Experience the pinnacle of sophistication as our expert team transform dreams into tangible reality.</p>
        </div>


        <div>
            <div className='aboutUsBodyText wm-Cont' >
                <p className='aboutUsBodyTitle blue spl sel-head'> Global Expertise</p>
                <p className='aboutUsBodyDesc sel-desc'>With a global footprint, our expansive network includes connections in major cities around the world.  Our projects in and around the Middle East, Europe, North and South America have left an indelible mark worldwide.</p> 
            </div>
            <br /><br />
            <WorldMap />
        </div>
    </div>
  )
}

export default AboutUsBody