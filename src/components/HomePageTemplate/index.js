import React from 'react'
// import { Link } from 'gatsby'
import Helmet from 'react-helmet'
// import Offerings from '../Offerings'
// import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import Image from '../Image'
// import { graphql } from 'gatsby'
// import { HTMLContent } from '../Content'
import Contact from '../Contact-inc'
import ScrollAnimation from 'react-animate-on-scroll'
// import PopNewsletter from '../PopNewsletter'
// import ArticleTemplate from '../ArticleTemplate'
// import { Link } from 'gatsby'
import styled from 'styled-components'
// import Intro1 from '../Intro1'
import Intro2 from '../Intro2'
// import Intro3 from '../Intro3'

const CustomBox = styled.div`
*, *:before, *:after { box-sizing: border-box; }

// .intro:before{
// 	content: "Todd Leads A Dual-Life";
// position:absolute;
// display: flex;
// align-items: center;
// justify-content: center;
// font-size:280%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
// animation: poof 1.5s forwards;
// animation-delay: 1.5s;
// top:0 !important;
// }

.image-wrap {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.image-wrap img {
  width: 100vw;
  z-index:0;
}




@media (min-width: 48em) {

  .boom1{font-size:380% !important;}
  .boom2{font-size:250% !important;}
  .boom3{font-size:380% !important;}
  .boom4{font-size:280% !important;}

}

@media (max-width: 48em) {

  .image-wrap {height:auto !important; min-height:300px !important;}
  
  .intro:before{font-size:150% !important}
  .content{flex-direction:column !important;}
  .content .stack{width:100% !important; margin:0 !important; background:tranparent !important;}
  .pitch{font-size:250% !important; text-align:center;}
  .split {display:block !important; width:100% !important; }
  .split div{max-width:100% !important; background:tranparent !important;}
  .sidebar{margin:2rem 0;}
  .sidebar .logolink{text-align:center !important;}
  .textcontent{margin: 0 !important;}
}




`



const HomePageTemplate = ({
  title,
  heading,
  description,

  meta_title,
  meta_description,

}) => (
<>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
      <html lang="en" className="fullhead" />
    </Helmet>
    
    





<CustomBox>
<div className="intro">
{/* <Intro1 /> */}
{/* <Intro2 /> */}
{/* <Intro3 /> */}
<Intro2 />

<div className="container textcontent" style={{margin:'3% 12%', padding:'1.5rem'}}>

<div className="container">
<div className="content" style={{padding:'1rem 1rem',}}>
{/*  <Image alt="Hytron Manufacturing Precision Parts and Machining" filename="IMG_2506.jpg"  width="220" height="220" style={{float: 'right', margin:'0 0 1rem 1rem',}} /> */}


<h2>Contract Manufacturing</h2>
<p>Hytron is a contract manufacturing service provider.</p>

<div className="container" style={{float: 'right', margin:'1rem 0 1rem 1rem', width:'50%', height:'', overflow:'hidden'}}><Image alt="Hytron Manufacturing Precision Parts and Machining" filename="shutterstock_226894963.jpg"  width="220" height="220" /></div>

<p>Through our outsourcing services, we have partnered with Fortune 500 companies for their component part manufacturing. This has resulted in a reduced time-to-market and cost savings for our Customers.</p>

<p>Our manufacturing capabilities range from prototype fabrication to close tolerance machining in production volumes to support your requirements.</p>
</div>
</div>




<div className="container">
<div className="content" style={{padding:'1rem 1rem',}}>
{/* <img src="" alt="Placeholder" width="220" height="220" style={{float: '', margin:'0 1rem 1rem 0',}} /> */}

<h2>Lean Manufacturing</h2>

<div className="container" style={{float: 'right', margin:'1rem 0 1rem 1rem', width:'50%', height:'', overflow:'hidden'}}><Image alt="Hytron Manufacturing Precision Parts and Machining" filename="slider2.jpg"  width="220" height="220" /></div>


<p>Products you need –  at the desired volume – when you want them.</p>

<p>Our supply chain expertise in Build-to-Order  product assembly and our proprietary quoting, planning, quality inspection and supply chain management capability create cost effective fulfillment solutions. Let us show you how we can tailor a “Kanban” replenishment program to meet your needs and avoid supply chain disruptions</p>
</div>
</div>



<div className="container">
<div className="content" style={{padding:'1rem 1rem',}}>
{/* <img src="" alt="Placeholder" width="220" height="220" style={{float: 'right', margin:'0 0 1rem 1rem',}} /> */}
<h2>The Hytron Difference</h2>

<div className="container" style={{float: 'right', margin:'1rem 0 1rem 1rem', width:'50%', height:'', overflow:'hidden'}}><Image alt="Hytron Manufacturing Precision Parts and Machining" filename="shutterstock_977142891.jpg"  width="220" height="220" /></div>


<p>With our best-in-class capabilities, high quality standards and supply chain tracking system we can deliver your products in the most cost effective way.</p>
<p>Let Hytron assist you with bringing your product to market.</p>
<br />
<br />
</div>
</div>

</div>

<ScrollAnimation animateIn="bounceInUp" delay={0}>
<div className="outer">
    <Contact className="container contactform" />
</div>
</ScrollAnimation>
<br />
    
    </div>
    </CustomBox>
  </>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

export default HomePageTemplate
