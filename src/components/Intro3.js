import React from 'react'
import styled from "styled-components"
import Image from '../components/Image'
// import Newsletter from '../components/Newsletter'
import ScrollAnimation from 'react-animate-on-scroll'

const CustomBox = styled.div`






`



   
const Intro3 = () => (

   


<CustomBox style={{}}>
<div className="outer">
  
<div className="image-wrap" style={{position:'relative', overflow:'hidden', paddingTop:'60px', borderBottom:'0px solid #222', borderRight:'0rem solid #dd4400', borderLeft:'0rem solid #dd4400', }}>
  
 <div className="" style={{position:'absolute', top:'0', left:'0', width:'97vw', height:'100vh', overflow:'hidden', padding:'20px 0 0 0', border:'0px solid red', zIndex:'1',}}>
 
 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
 
 
 </div>
 
 
 
<ScrollAnimation animateIn="fadeIn">
<div id="slideshow">
  <div className="slide-wrapper"  style={{position:'relative', zIndex:'0',}}>
  
   
   
    <div className="slide kenburns-bottom-left" style={{zIndex:'',}}><Image className="slider" alt="BOAT" filename="night213.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    
    <div className="slide kenburns-bottom-left" style={{zIndex:'',}}><Image className="slider" alt="CAR" filename="night294.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    
    <div className="slide kenburns-bottom-left" style={{zIndex:'',}}><Image className="slider" alt="BARN" filename="night300.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    
    <div className="slide kenburns-bottom-left" style={{zIndex:'',}}><Image className="slider" alt="CAMP" filename="night303.jpg" style={{backgroundSize:'cover', zIndex:'',}} /></div>
    
   <div className="slide kenburns-bottom-left" style={{zIndex:'',}}><Image className="slider" alt="PLANE" filename="night307.jpg" style={{backgroundSize:'cover', zIndex:'',}} /></div>
   
  </div>
</div>
</ScrollAnimation>


</div>
</div>


</CustomBox>
  
)

export default Intro3