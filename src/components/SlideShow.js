import React, {useEffect, useState} from 'react'
import video1 from '../assets/videos/1.mp4'
import video2 from '../assets/videos/2.mp4'
import video3 from '../assets/videos/3.mp4'
import video4 from '../assets/videos/4.mp4'
import video5 from '../assets/videos/5.mp4'
import '../stylesheets/SlideShow.css'

const SlideShow = () => {

  const slides = [
    {
      id: 0,
      title: "Transforming Ideas into Exhibits",
      desc: "We, at Suprano Exhibits, are visionaries in exhibition booth design and construction on a global scale. From concept to execution, we are with you every step of the way, ensuring efficient coordination, meticulous attention to detail, and a flawless design that leaves a lasting impression.",
      video: video1,
      tagline: "The Best. Always."
  },
  {
    id: 1,
    title: "Building Bridges Worldwide",
    desc: "Indulge in mesmerizing booths, brought to life by our enterprise. Embrace our extraordinary exhibitions spanning across Europe, Asia, the Middle East, North and South America for an unforgettable experience. Immerse yourself in a realm of unrivalled elegance and breathtaking craftsmanship as you discover our bespoke creations.",
    video: video2,
    tagline: "The Best. Always."
},{
  id: 2,
  title: "Your Needs Create Our Inspiration",
  desc: "Our unwavering commitment to quality sets us apart, exceeding expectations at every turn. From seamless integration of cutting-edge technology to the utmost dedication to detail, we transform every exhibition into captivating instances. Elevate your brand presence and evoke wonder with our exquisite booths, where innovation meets timeless elegance.",
  video: video3,
  tagline: "The Best. Always."
},{
  id: 3,
  title: "Adroit Team of Visionaries and Project Managers",
  desc: "The people behind our expanding success include a team of exceptional designers and project supervisors. Their expertise in exhibition design and meticulous implementation is fundamental to our enterprise. With our willingness to go above and beyond, we can bring your vision to life.",
  video: video4,
  tagline: "The Best. Always."
},{
  id: 4,
  title: "We convey your dream to the world",
  desc: " At Suprano Exhibits, we believe that extraordinary experiences are born from the seamless fusion of sophistication and enthusiasm. We pride ourselves on creating unforgettable moments that leave a lasting impression. Whatever your needs be, Suprano Exhibits offers the perfect blend of elegance and prominence.",
  video: video5,
  tagline: "The Best. Always."
},
]

const [activeSlide, setActiveSlide] = useState(0);

  useEffect(()=>{
    const cur = document.querySelector(".cursor")
    const Wrapper = document.querySelector("#slideShowContainer")
    const curPos = (event) => {
      var posY = event.clientY
      var posX = event.clientX
      cur.style.transform = `translate(${posX-60}px,${posY-60}px)`
    }
    Wrapper.addEventListener("mousemove",curPos)

    return () => Wrapper.removeEventListener("mousemove",curPos)
  },[])
  return (
    <div id='slideShowContainer'>
      <span className='cursor' onClick={() => setActiveSlide((activeSlide + 1) % 5)}><span className='cur-bg rotate-anim'></span></span>
      {slides.map(slide => <div className={(activeSlide === slide.id) ? "slide active" : "slide"} key={slide.id} onClick={() => setActiveSlide((activeSlide + 1) % 5)}><video src={slide.video} className="slideShowVideo" autoPlay loop muted /><div className='slideContent'><p className='slideTitle'>{slide.title}</p> <p className='slideTagline'>{slide.tagline}</p><p className='slideDesc'>{slide.desc}</p><p className='slideCounter'>0{activeSlide + 1} / 05</p></div></div>)}
    </div>
  )
}

export default SlideShow