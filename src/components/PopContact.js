import React from 'react'
import styled from "styled-components"
import Contact from '../components/Contact'
import { FaTimesCircle } from 'react-icons/fa'

const CustomBox = styled.div`
*, *:before, *:after { box-sizing: border-box; }
// body { height: 100vh;}

.modal-container {
/*   margin: 60px auto; */
  padding-top: 0px;
  position: relative;
  width: auto;    
  .modal-btn {
    display: block;
/*     margin: 0 auto; */      
    color: #fff;  
    height: 60px; 
    padding:5px 1rem 0 1rem;   
    line-height: 50px;    
    background: transparent;
      
    border: 0;
/*     border-radius: 3px; */  
    cursor: pointer;
    text-align: center;
    box-shadow: 0 5px 5px -5px #333;  
    transition: background 0.3s ease-in;
    &:hover { 
    background: #000; cursor:pointer;
    background: rgb(126,209,234); /* Old browsers */
background: -moz-radial-gradient(center, ellipse cover, rgba(126,209,234,1) 0%, rgba(65,145,186,1) 40%, rgba(3,73,127,1) 100%); /* FF3.6-15 */
background: -webkit-radial-gradient(center, ellipse cover, rgba(126,209,234,1) 0%,rgba(65,145,186,1) 40%,rgba(3,73,127,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: radial-gradient(ellipse at center, rgba(126,209,234,1) 0%,rgba(65,145,186,1) 40%,rgba(3,73,127,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7ed1ea', endColorstr='#03497f',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
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
	  right:25px;
	  z-index:5;
	  
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
     
  .modal-content-btn {
    position: absolute;
    text-align: center;
    cursor: pointer;
    bottom: 20px;
    right: 30px;
    background: $primary;
    color: #fff;
    width: 50px;
    border-radius: 2px;
    font-size: 14px;
    height: 32px;
    padding-top: 9px;
    font-weight: normal;
    &:hover { color: #fff; background: #2a1010;
    }
  }
  
  #modal-toggle {
    display: none;  
    &.active ~ .modal-backdrop,
    &:checked ~ .modal-backdrop {
      background-color: rgba(0, 0, 0, 0.6);
      width:100vw;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 3;
      visibility: visible;
      opacity: 1;      
      transition: opacity 0.2s ease-in; 
    }
    &.active ~ .modal-content,
    &:checked ~ .modal-content {
      opacity: 1;
      background-color: transparent;
    max-width: 700px;
    width: 90vw;
      height: auto;
      padding: 0;
      position: fixed !important;
    display:flex;
    align-content:center;
    justify-content:center;
	margin:0 auto;
      top: 20px;
      left:1%;
      right:1%;
   
      border-radius: 4px;
      z-index: 4;
      pointer-events: auto;
      cursor: auto;
      visibility: visible; 
      overflow: scroll;
  
      @media (max-width: 400px) { left: 50px; }                   
    }  
  }
}

@media (max-width: 600px){
	#modal-toggle {
	&.active ~ .modal-content,
    &:checked ~ .modal-content {
	    left:0 !important;
	    width: 100% !important;
	    text-align: left !important;
	   }
	  }
	    
	     
	     
	     .modal-close{top:10px !important; right: 20px !important; color: #999 !important;}
	     
.modal-container .modal-btn{text-align:left !important; padding-left:1.8rem;}
	    
}
`


const PopupContact = () => (

<CustomBox>
<div className="modal-container">
  <input id="modal-toggle" type="checkbox" />
  
  <label className="modal-backdrop" htmlFor="modal-toggle"></label>
  <div className="modal-content">
    <label className="modal-close" htmlFor="modal-toggle"><FaTimesCircle /></label>
    <Contact />
    
 
  </div>          
</div>
</CustomBox>    

)

export default PopupContact


