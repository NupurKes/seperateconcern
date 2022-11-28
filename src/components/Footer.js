import React from 'react'

const Footer = () =>{
    let footerStyle ={
      position: "fixed",
      left: "0",
      bottom: "0",
      width: "100%",
      backgroundColor: "#3f51b5",
      color: "white",
      textAlign: "center",
   }
  return (
    <footer style={footerStyle}>
        <p>Copyright &copy; Nupur</p>
    </footer>
  )
}

export default Footer;