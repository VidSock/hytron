
import React from 'react'
import Layout from '../components/Layout'
import Contact from '../components/Contact-inc'
import { MdPictureAsPdf } from 'react-icons/md'
// import { FiCommand } from 'react-icons/fi'


import ScrollAnimation from 'react-animate-on-scroll'

// import PopSemi from '../components/PopSemi'

import styled from "styled-components"
const CustomBox = styled.div`

/*
.intro:before{
	content: "About Twilightscapes";
position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:380%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
}
*/


.edu li{margin:2rem 0;}

h2{color:#dd4000}
// .headroom--unfixed header{width:100%; margin:0 auto; border:0px solid red !important;}



.outer .container{width:100%; height:auto; margin:1rem auto;}

.imgbox img{border-radius:12px; border:0px solid #000;}

.spacer33{height:15vh;}
.spacer66{height:66vh;}
.spacer99{height:99vh;}

p{line-height:150%;}


body.light .speech p span{color:#fff;}

.outer{padding:0 11%; border:0px solid red; padding-top:2rem !important;}
.split div:first-child{padding-right:1rem; border:0px solid yellow;}
.split div:last-child{padding-left:1rem; border:0px solid blue;}

@media (min-width: 48rem) and (max-width: 1000px) { 
	
 }


@media (max-width: 48rem) {
.split{flex-direction:column !important; width:100% !important;}

.split div{width:100% !important}
.split div:first-child{order:1}
.split div:last-child{order:2}

.outer{padding:5%; border:0px solid red; }
.split div:first-child{padding-right:0rem; border:0px solid yellow;}
.split div:last-child{padding-left:0rem; border:0px solid blue;}

.spacer33, .spacer66, .spacer99{height:15vh;}

.split.nowrap{flex-direction:row !important; width:100% !important;}
.split.nowrap div:first-child{order:2}
.split.nowrap div:last-child{order:1}
.split.nowrap .speech{border:1px solid;}

.split.nowrap div.speech{width: 60vw !important;}
.split.nowrap div.imgbox{width:30vw !important; margin-left:1rem !important;}



.intro:before{font-size:200%;}

// body.dark, body.dark .container{background-color:#fff !important;}
body.dark .container, .outer, .intro, .split{background-color:#eee !important;}





}

@media (min-width: 58rem) {
	.outer{padding:0 14%;}
	}

`


const Resume = () => {
  return (
	  <CustomBox>
    <Layout>


    


      
      
      
  
<section className="about outer intro section" style={{paddingTop:'0', overflow:'hidden',}}>


    





<div className="split content1 container1" style={{display:'flex', justifyContent:'center', alignItems:'', position:'relative', width:'100%', margin:'0 auto',}}>



<div className="primary cf " style={{color:'#444', }}>

<h3 className="logotype printonly" style={{textAlign:'left', fontSize:'250%', height:'50px',}}>
Lambert
</h3>



	
	<h2 className="todd-headline">Highlights</h2>

<p><strong>Product Designer - Skilled web designer/developer with over 15 years of professional experience.</strong></p>

<p>Proven record of completing bold, clean, and effective designs with consistent performance ahead of schedule and under budget.</p>

<p>Successful product designer able to integrate both technical and creative skills to create cross-browser and cross-platform solutions with modern web architecture and navigation systems.</p>

<p>Industry experience including semiconductor, hospitality, entertainment, health, publishing, finance, insurance, construction, computer software, and direct marketing.</p>

  
<h2 className="todd-headline">Proficiency</h2>

<p>Veteran WordPress Theme/Plugin Developer <br />React JS Frontend Designer/Developer</p>

<p>Responsive, Reactive, Adaptive Design, progressive enhancement, PWA development, object oriented CSS animation.</p> 

<p>Analytics, SEO, UI design, Information Architecture &amp; Content Management System integrations. Photo and Video production. </p>

<p><strong>I prefer: JAM stack, React, Gatsby, Canon, Subaru and my Mac.</strong></p>

<br />
<h2 className="todd-headline">Education</h2>

<ul className="edu">
<li><strong>Cal State University Fullerton</strong><br />
Web Design and Development - Degree</li>

<li><strong>Coastline Community College</strong><br />
Quality Assurance - Degree</li>

<li><strong>Golden West College</strong><br />
Business Management - Degree</li>

<li><strong>Huntington Beach High School</strong><br />
High School General Courses - Diploma</li>
</ul>

	
</div>


<div className="secondary cf p-left" style={{color:'#444',}}>
<h3 className="printonly" style={{textAlign:'right', height:'50px', fontSize:'150%',}}>(228) 239-6088
</h3>  
	
<h2 className="todd-headline">Professional Experience</h2>

<p><strong>Todd Lambert Enterprises, 1999 - Present</strong><br />
<em>Sole Proprietor / Photographer</em>
<br /><br />
Conducted all facets of web development business including meeting with clients, selling web services, and developing methods for improved customer support. <br /><br /> I also like to travel and photograph spooky and abandoned places, at night, all by myself and all over the country.</p>

<p><strong>Primal Health, 2013 - 2014</strong><br /> 
<em>Creative Director / Associate Developer</em>
<br /><br />
Responsible for all graphic components and direct marketing efforts. Worked with various departments to advance reach through social marketing, engineering and analytics. Also performed SEO and conducted extensive AB testing.</p>

<p><strong>Texas Instruments, 2010 - 2013</strong><br /> 
<em>Style Architect / Front End Developer / Senior UI Designer</em>
<br /><br />
Worked on all aspects of TIs website, from new ad campaigns and interactive widgets to the core infrastructure including a new re-design and replacement of site navigation site-wide. Championed responsive design techniques and other modern architecture for use on corporate site. Utilized Jquery animation for replacing all of TIs legacy Flash files.</p>

<p><strong>AGJ Systems &amp; Networks, 2008 - 2010 </strong><br />
<em>Web Director / Lead Developer / Senior Designer</em>
<br /><br />
Solely responsible for all design and development aspects of web department. Interacted with customers and other departments to integrate designs into modern, full-featured websites catered to customer needs.</p>

<p><strong>TeleVox Software, 2004 - 2007</strong><br />
<em>Director of Web Development</em>
<br /><br />
Responsible for site architecture, design, graphics, programming, copywriting/editing, project management of all TeleVox websites and online marketing campaigns. Supervised 25 designers and developers.</p>


</div>

 </div>
 
 <br />
<br />
   
   <div className="noprint" style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',}}>
   
   <a className="grad special" style={{textAlign: 'center', padding:'.4rem 2rem', textDecoration: 'none', color:'#fff',}} href="/todd-lambert-resume.pdf">Download &nbsp;<MdPictureAsPdf /></a>
   

   
   </div>



<br />
<br />
    
<ScrollAnimation className="noprint" animateIn="bounceInUp" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
    <Contact />
</ScrollAnimation>
      
       

      </section>
      
      
    </Layout>
    </CustomBox>
  )
}

export default Resume
