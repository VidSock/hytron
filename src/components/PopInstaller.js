import React from 'react'
import styled from "styled-components"

import Image from '../components/Image'
import { FiShare } from 'react-icons/fi';
import { FaRegPlusSquare } from 'react-icons/fa';
import { FaTimesCircle } from 'react-icons/fa'
// import Newsletter from '../components/Newsletter'
// import ScrollAnimation from 'react-animate-on-scroll'

const CustomBox = styled.div`



.popsemicontainer {
  .grad {
	  position:relative;
	  top:30px;
// 	  z-index:3;
    margin: 0 auto;      
    color: #fff;  
    height:50px;
    width:auto;
    padding:.8rem 2rem;   
    line-height: 20px;    
//     background: #DB2600;
    font-weight:bold;
    border: 0;
    border-radius: 3px;  
    cursor: pointer;
    text-align: center; 
    transition: background 0.3s ease-in;
    &:hover { /* background: #ff0000; */ cursor:pointer; }
  }
  .content {
    height: 0; 
    width: auto; 
    opacity: 0;    
    visibility: hidden;
    overflow: hidden; 
    cursor: default;
    display:none;
    transition: opacity 0.2s ease-in; 
	}      
  }     
  
    .modal-content, 
  .modal-backdrop {
    height: 0; 
    width: 0; 
    opacity: 0;    
    visibility: hidden;
    overflow: hidden; 
    cursor: default;
    transition: opacity 0.2s ease-in; 
  }
  
    .modal-close {
	  position:absolute;
	  top:15px;
	  right:15px;
// 	  z-index:5;
	  
    color: #999;
    padding-top: 0;
	font-size:28px;
    width: 25px;
    height: 25px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    &:hover { color: #666;
    }       
  }

  #semitoggle {
    display: block;
    visibility: hidden;
    &.active ~ .modal-backdrop,
    &:checked ~ .modal-backdrop {
      background-color: rgba(0, 0, 0, 0.0);
      width: 100vw;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      z-index: -1;
      visibility: visible;
      opacity: 1;      
      transition: opacity 0.2s ease-in; 
    }

    &.active ~ .content,
    &:checked ~ .content {  
	opacity: 1;
      background-color: transparent;

      height: auto;
      padding:0 0 0 0 !important;
	margin:0 auto;
	display:block;
//       z-index: 4;
      pointer-events: auto;
      cursor: auto;
      visibility: visible; 
      @media (max-width: 400px) {  }                   
    }  
  }
}
#semitoggle {
	&.active ~ .btn,
    &:checked ~ .btn {
// 	display:none;
	}
}
`



   
const Popupsemi = () => (

   


<CustomBox style={{}}>


<div className="popsemicontainer" style={{position:'relative', padding: '0 0', marginTop: '0', display:'flex', justifyContent:'', height:'auto', flexDirection:'column',}}>
<label className="txtshadow shadow grad" htmlFor="semitoggle" >Install Now</label>

  <input id="semitoggle" type="checkbox" style={{position: 'relative',}} />
  
    


   
  <div className=" content" style={{width:'90%', maxWidth:'700px', position:'relative',}}>

<label className="close" htmlFor="semitoggle" style={{position: 'absolute', right:'20px', top: '20px', fontSize:'24px', cursor:'pointer',}} title="Close this section"><FaTimesCircle /></label>
    
    <div className="container" style={{margin:'0', padding:'0px',}}>
    
    
    
    <div className="container" style={{padding:'2rem 1rem', border:'1px solid #000', borderRadius:'8px',}}>


	
	<h4 style={{textAlign:'center', fontSize:'140%',}}>Install App</h4>
	<br />

	<br /><br />
	<div style={{fontSize:'80%', textAlign:'center',}}>On your device, locate the browser menu:</div>
	<br />
	
    <div style={{fontSize:'100%', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'middle', lineHeight:'200%', width:'100%', margin:'0 auto', padding:' 1rem', border:'2px dotted #777', borderRadius:'8px',}}>
    
  <div style={{textAlign:'left', display:'flex', alignContent:'center', marginBottom:'1rem',}}>
 <FiShare style={{fontSize:'200%', marginLeft:'0', marginRight:'2%', float:'',}} />

  1) Press the 'Share'(iOS) or 'More'(Android) button 
</div>
   
    
 <div style={{textAlign:'left', display:'flex', alignContent:'center',}}>
 <FaRegPlusSquare style={{fontSize:'200%', marginLeft:'0', marginRight:'2%', float:'',}} /> 
 
2) Press 'Add to Home Screen'
 </div>
 
 </div>
 

    
    
    </div> 
 </div>
<br />
<br />

<div style={{padding:'0 2rem',}}>
<h4>Android OS</h4>
<Image alt="How To Install This App" filename="install-android.jpg" />
<br />
<br />
<h4>Apple iOS</h4>
<Image alt="How To Install This App" filename="install-ios.jpg" />
</div>

  </div> 
</div>



</CustomBox>
  
)

export default Popupsemi