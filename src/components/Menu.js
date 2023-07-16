import React from 'react'
import '../stylesheets/Menu.css'
import CloseIcon from '@mui/icons-material/Close'
import { Instagram, LinkedIn, Email } from "@mui/icons-material"

const Menu = ({ hideMenu }) => {
  return (
      <div id='menuContainer'>
        <div id='mainMenuContainer'>
          <div id='mainMenuLinksContainer'>
            <a href='/' className='menuLink'><span className='strikethrough'>Home</span></a>
            <a href='/AboutUs' className='menuLink'><span className='strikethrough'>About Us</span></a>
            <a href='/Portfolio' className='menuLink'><span className='strikethrough'>Portfolio</span></a>
            <a href='/Services' className='menuLink'><span className='strikethrough'>Services</span></a>
            <a href='/ContactUs' className='menuLink'><span className='strikethrough'>Contact Us</span></a>
          </div>
          <div id='menuInfoContainer'>
            <p id='menuCompanyName'>Suprano Exhibits</p>
            <div className='menuInfoContainerRow'>
              <div className='menuInfoContainerCell'>
                <p className='menuInfoContainerCellTitle'>Phone No.</p>
                <p className='menuInfoContainerCellDesc'>+319 7010256003 (Netherlands)</p>
                <p className='menuInfoContainerCellDesc'>+971 528617600 (Dubai)</p>
                
              </div>
              <div className='menuInfoContainerCell'>
                <p className='menuInfoContainerCellTitle'>Email</p>
                <p className='menuInfoContainerCellDesc'>info@supranoexhibits.com</p>
              </div>
            </div>
            <div className='menuInfoContainerRow'>
              <div className='menuInfoContainerCell'>
                  <p className='menuInfoContainerCellTitle'>Address</p>
                  <p className='menuInfoContainerCellDesc'><b>Poland</b></p>
                  <p className='menuInfoContainerCellDesc'>ŚREDZKA 49</p>
                  <p className='menuInfoContainerCellDesc'> ZALASEWO 62-020</p>
                </div>
                <div className='menuInfoContainerCell'>
                <br />
                <p className='menuInfoContainerCellDesc'><b>Spain</b></p>
                  <p className='menuInfoContainerCellDesc'>C/ DEL BRONZE 32</p>
                  <p className='menuInfoContainerCellDesc'>08915 BADALONA<br />(BARCELONA)</p>
                </div>
                <div className='menuInfoContainerCell'>
                  <br />
                <p className='menuInfoContainerCellDesc'><b>Dubai</b></p>
                  <p className='menuInfoContainerCellDesc'>Office 2309</p>
                  <p className='menuInfoContainerCellDesc'>Prism Tower Business Bay</p>
                </div>
            </div>
          </div>
        </div>
        <div id='menuBottomBar'>
          <div className='menuBottomBarChild' id='menuBottomLinksContainer'>
            <a href='/Blogs' className='menuBottomBarLink'><span className='strikethrough'>Blogs</span></a>
            <a href='/AboutUs' className='menuBottomBarLink'><span className='strikethrough'>Locations</span></a>
          </div>
          <div className='menuBottomBarChild' id='menuBottomSocialsContainer'>
            <a href='https://www.linkedin.com/company/suprano-1exhibits/' className='menuIcon'><span className='strikethrough'><LinkedIn sx={{fontSize: 24}} /></span></a>
            <a href='https://instagram.com/supranoexhibits?igshid=NTc4MTIwNjQ2YQ==' className='menuIcon'><span className='strikethrough'><Instagram sx={{fontSize: 24}} /></span></a>
            <p className='menuIcon'><span className='strikethrough' onClick={() => navigator.clipboard.writeText("+91 9953087077")}><Email sx={{fontSize:24}} onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=info@supranoexhibits.com")}/></span></p>
          </div>
        </div>
        <CloseIcon  sx={{fontSize: 30}} style={{color: "white", position: "absolute", top: "2%", right: "4%"}} onClick={hideMenu} ></CloseIcon>
      </div>
  )
}

export default Menu