import React from 'react'
import logo from '../assets/images/logo.png'
import '../stylesheets/prep.css'
import '../stylesheets/NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';

document.addEventListener("scroll", () => {
    if (window.scrollY < window.innerHeight*0.2) {
        document.getElementById('navbar').style.background = "rgba(0, 0, 0, 0)";
        if (window.scrollY === 0) document.getElementById('navbar').style.position = "absolute";
        
    }
    else {
        document.getElementById('navbar').style.background = "rgba(0, 0, 0,0.3)";
        document.getElementById('navbar').style.position = "fixed";
    }

})

const NavBar = ({ showMenu }) => {
  return (
    <div id='navbar'>
        <img src={logo} id='logo' alt='logo' onClick={() => window.open("./", "_self")}/>
        <MenuIcon id='menuIcon' sx={{fontSize: 45}} style={{zIndex: 998, color: "white", float: "right", marginRight: 50, marginTop: 20}} onClick={showMenu}> </MenuIcon>
    </div>
  )
}

export default NavBar