
import React from 'react'
import Layout from '../components/Layout'
import { FiShare } from 'react-icons/fi';
import { FaRegPlusSquare } from 'react-icons/fa';


import ScrollAnimation from 'react-animate-on-scroll'

// import PopSemi from '../components/PopSemi'

import styled from "styled-components"
const CustomBox = styled.div`

.intro:before{
	content: "Gallery 1";

position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:480%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
}

@media (hover: hover) {
.gatsby-image-wrapper{transform: scale(1.25);}
}
/*
	.gatsby-image-wrapper:after{
	content: "+ click to zoom";
	position:absolute; bottom:10px; right:10px;
	color:#fff;
	}
*/

`


const Installer = () => {
  return (
	  <CustomBox>
    <Layout>


    


      
      
      
  

      
      <ScrollAnimation animateIn="fadeIn" initiallyVisible={true} delay={100} animateOnce={true} animatePreScroll={true}>

<div className="container" style={{margin:'2% 10%', padding:'2rem 1rem', border:'1px solid #000', borderRadius:'8px',}}>


	
	<h4 style={{textAlign:'center', fontSize:'140%',}}>Install App</h4>
	<br />
	<span style={{fontSize:'100%',}}>This website has app functionality. Add it to your home screen to get added features on-the-go, like exclusive content, fullscreen and offline capability.</span>
	<br /><br />
	<div style={{fontSize:'80%', textAlign:'center',}}>On your device, locate the browser menu:</div>
	<br />
	
    <div style={{fontSize:'100%', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'middle', lineHeight:'200%', width:'100%', margin:'0 auto', padding:' 1rem', border:'2px dotted #777', borderRadius:'8px',}}>
    
  <div style={{textAlign:'left', display:'flex', alignContent:'center', marginBottom:'1rem',}}>
 <FiShare style={{fontSize:'200%', marginLeft:'0', marginRight:'2%', float:'',}} />
  1) Press the 'Share' button 
</div>
   
    
 <div style={{textAlign:'left', display:'flex', alignContent:'center',}}>
 <FaRegPlusSquare style={{fontSize:'200%', marginLeft:'0', marginRight:'2%', float:'',}} /> 
 
2) Press 'Add to Home Screen'
 </div>
 
 </div>
 
    <br />
    <br />
    </div>
   
      </ScrollAnimation>

    

      
       

      
      
      
    </Layout>
    </CustomBox>
  )
}

export default Installer
