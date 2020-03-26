import React from 'react'
import styled from "styled-components"
import Image from '../components/Image'
// import Newsletter from '../components/Newsletter'
import ScrollAnimation from 'react-animate-on-scroll'

const CustomBox = styled.div`




`



   
const Intro2 = () => (

   


<CustomBox style={{}}>

<ScrollAnimation animateIn="fadeIn">
<div className="outer">
  
<div className="image-wrap" style={{position:'relative', overflow:'hidden', paddingTop:'60px', borderBottom:'0px solid #222', borderRight:'0rem solid #dd4400', borderLeft:'0rem solid #dd4400', }}>
  

 <div className="" style={{position:'absolute', top:'60px', left:'0', width:'100vw', height:'100vh', overflow:'hidden', padding:'20px 0 0 0', border:'0px solid red', zIndex:'1',}}>
  
  

   

  <ScrollAnimation animateIn="fadeIn" delay={1600} style={{position:'relative', top:'0', right:'0',}}>
  <h1
    className="boom1 narrow txtshadow-header mobile-txt"
    style={{
     color: 'white',
      textAlign: 'center', 
      letterSpacing: '.0rem',
    }}
  >
    Quality Manufacturing
  </h1>
  </ScrollAnimation>
  
  
  <ScrollAnimation animateIn="fadeIn" delay={1400} offset={0} style={{position:'relative', top:'0', left:'0', paddingTop:'0', overflow:'hidden', width:'100%',}}>
        <div className=""><h2
          className="boom3 normal txtshadow-header"
          style={{
            color: '#fff',
            textAlign: 'center', 
          }}
        >
         Precision Parts
        </h2></div>
        </ScrollAnimation>
        
        
        
        
        

        
    
        
        
  <ScrollAnimation animateIn="fadeIn" delay={1700} style={{position:'', top:'0', right:'0',}}>
        <h3
          className="boom4 txtshadow-header mobile-txt"
          style={{
           color: 'white',
            textAlign: 'center',
            textTransform: 'normal', 
          }}
        >
         Done right AND on time
        </h3>
        </ScrollAnimation>


        




        
        </div>
        
        
        

<div className="" style={{position:'absolute', top:'0', width:'100vw', overflow:'hidden', border:'0px solid red', zIndex:'0',}}>




<ScrollAnimation animateIn="fadeIn">
<div id="slideshow">
  <div className="slide-wrapper"  style={{position:'relative', zIndex:'0',}}>
  
   
    <div className="slide" style={{zIndex:'',}}><Image className="slider" alt="Todd Camp" filename="slider1.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
      
    <div className="slide" style={{zIndex:'',}}><Image className="slider" alt="Todd Mushroom" filename="img_2487.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    
    <div className="slide" style={{zIndex:'',}}><Image className="slider" alt="Todd Mushroom" filename="shutterstock_2208127601.jpg" style={{backgroundSize:'cover', zIndex:'', }} /></div>
    

    

   
  </div>
</div>
</ScrollAnimation>
        </div>
        
        
        
    

</div>
</div>
</ScrollAnimation>


</CustomBox>
  
)

export default Intro2