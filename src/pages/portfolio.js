
import React from 'react'
import Layout from '../components/Layout'
// import Install from '../components/Install'
import { graphql, useStaticQuery } from 'gatsby'
import Gallery from '../components/Gallery'
import Image from '../components/Image'
// import { Link } from 'gatsby'
import Contact from '../components/Contact-inc'
import ScrollAnimation from 'react-animate-on-scroll'
// import GalleryMenu from '../components/GalleryMenu'
// import { FiZoomIn } from 'react-icons/fi'
// import PopSemi from '../components/PopSemi'

import styled from "styled-components"
const CustomBox = styled.div`
.intro:before{
	content: "Full Stack Product Designer";
	white-space: pre-wrap; /* or pre-wrap */
position:absolute;
display: flex;
align-items: center;
justify-content: center;
z-index:1;
font-size:250%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px white;
animation: poof 1s forwards;
animation-delay: 1s;
}





.speech:after {
	content: '';
position: absolute;
top: 30%;
right: -58px;
width: 0;
height: 0;
	border: 60px solid transparent;
	border-left-color: inherit;
	border-right: 0;
	border-bottom: 0;
	 z-index:2;
}

@media (min-width: 50rem) {
.speech1{padding:20px 50px !important;}
}

@media (max-width: 48rem) {
.intro:before{font-size:200%;}
.speech:after {right: -28px;}
}

@media (hover: hover) {
.gatsby-image-wrapper{transform: scale(1.25);}
}
.gatsby-image-wrapper{transform: scale(1.25);}
/*
	.gatsby-image-wrapper:after{
	content: "+ click to zoom";
	position:absolute; bottom:10px; right:10px;
	color:#fff;
	}
*/





`


const Portfolio = graphql`
  query Portfolio {
    allFile(filter: { relativeDirectory: { eq: "favorites" } }) {
      edges {
        node {
          childImageSharp {
            original {
              width
              height
            }
            fluid {
              ...GatsbyImageSharpFluid
              originalName
              originalImg
            }
          }
        }
      }
    }
  }
`

const Gal1Page = () => {
  const data = useStaticQuery(Portfolio)
  return (
	  <CustomBox>
    <Layout>

<section className="about1 outer section" style={{paddingTop:'0', overflow:'hidden',}}>


<div className="container" style={{margin:'1rem 8%',}}>
<h3 className="logotype" style={{textAlign:'center', fontSize:'250%',}}>
Portfolio
</h3>
</div>



<div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="slideInLeft" animateOut="" animateOnce={true} delay={100} style={{width:'70%', zIndex:'1',}}>    
<div className="container speech" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative', boxShadow: '0px 0px 5px 0px black', }}>

<p>
<span className="txtshadow-header" style={{fontSize:'500%', color:'#ccc', position:'absolute', top:'-5px', left:'-10px',}}>&#10077;</span><br />
<span className="txtshadow-header" style={{fontSize:'500%', color:'#ccc', position:'absolute', bottom:'-15px', right:'-10px',}}>&#10078;</span><br />

My experience has taught me that good design is not created on a spur of the moment, nor does it come naturally. Good design is a thorough and interative process with site visitors in mind foremost. Good design is identifying a problem for those visitors and removing that problem.
</p>
<h5>- Todd Lambert</h5>
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="slideInRight" animateOut="" animateOnce={true} delay={100} style={{width:'30%', padding:'0', order:'2 !important',  zIndex:'0',}}>    

<div className="imgbox grad" style={{border:'4px solid #fff', position:'relative', margin:'0 0 0 0', borderRadius:'50%', padding:'1rem', overflow:'hidden'}}><Image alt="Co-worker talks about Todd Lambert" filename="todd-toon.png" style={{borderColor:'transparent',}} />
<div className="txtshadow" style={{position:'absolute', left:'0', bottom:'5px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}>Todd Lambert</div>
</div>
</ScrollAnimation>

 </div>
 
 
 
 
 {/* SKILLS TIMELINE */}

<div className="container">
<h3 className="logotype" style={{textAlign:'center', fontSize:'250%',}}>
Hats worn
</h3>
</div>


<div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>
 <ScrollAnimation animateIn="slideInLeft" animateOut="" animateOnce={true} delay={0} style={{width:'70%', zIndex:'1',}}>    
<div className="container speech1" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<h2>Entrepreneur</h2>
<p>
Being a self-starter and self-learner are the basic fundamentals of a natural entrepreneur. I&apos;ve been involved both as a partner and a consultant to many businesses and I am able to see the forest through the trees, while keeping an eye on the bottom-line.
</p>

</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="slideInRight" animateOut="" animateOnce={true} delay={100} style={{width:'30%', padding:'5%', order:'2 !important',  zIndex:'0',}} className="color">    

<Image alt="Co-worker talks about Todd Lambert" filename="hats1.png" style={{borderColor:'transparent',}} />

</ScrollAnimation>
 </div>
 
 
 
 
 
 <div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>
 
  <ScrollAnimation animateIn="slideInLeft" animateOut="" animateOnce={true} delay={100} style={{width:'30%', padding:'5%', order:'2 !important',  zIndex:'0',}} className="color">    

<Image className="color" alt="Co-worker talks about Todd Lambert" filename="hats2.png" style={{borderColor:'transparent',}} />

</ScrollAnimation>


 <ScrollAnimation animateIn="slideInRight" animateOut="" animateOnce={true} delay={0} style={{width:'70%', zIndex:'1',}}>    
<div className="container speech1" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<h2>Webmaster</h2>
<p>
Back in the day, a webmaster learned that a full tool box was needed for web design and development. I learned UNIX, IIS, TCP/IP, Cpanel, and PHPMyadmin while entertaining myself primarily in the CGI-Bin directory.
</p>

</div>
</ScrollAnimation>
 </div>
 
 
 
 
 <div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>
 <ScrollAnimation animateIn="slideInLeft" animateOut="" animateOnce={true} delay={0} style={{width:'70%', zIndex:'1',}}>    
<div className="container speech1" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<h2>Designer</h2>
<p>
Over the years I&apos;ve spent inordinate amounts of time learning Typography, Space and Composition. Learning is my personal design theory and I still strive to learn something new each day by trying things.
</p>

</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="slideInRight" animateOut="" animateOnce={true} delay={100} style={{width:'30%', padding:'5%', order:'2 !important',  zIndex:'0',}} className="color">    

<Image className="color" alt="Co-worker talks about Todd Lambert" filename="hats3.png" style={{borderColor:'transparent',}} />

</ScrollAnimation>
 </div>
 
 
 
  <div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>
 
  <ScrollAnimation animateIn="slideInLeft" animateOut="" animateOnce={true} delay={100} style={{width:'30%', padding:'5%', order:'2 !important',  zIndex:'0',}} className="color">    

<Image alt="Co-worker talks about Todd Lambert" filename="hats4.png" style={{borderColor:'transparent',}} />

</ScrollAnimation>


 <ScrollAnimation animateIn="slideInRight" animateOut="" animateOnce={true} delay={0} style={{width:'70%', zIndex:'1',}}>    
<div className="container speech1" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<h2>Developer</h2>
<p>
As the Internet became more complicated I immersed myself in different programming languages and countless environments. Learning to adapt design to logic was a major accomplishment and one that I still work at today.
</p>

</div>
</ScrollAnimation>
 </div>
 
 
 
  <div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>
 <ScrollAnimation animateIn="slideInLeft" animateOut="" animateOnce={true} delay={0} style={{width:'70%', zIndex:'1',}}>    
<div className="container speech1" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<h2>Marketer</h2>
<p>
I&apos;ve been on the Internet since the beginning. I&apos;ve become adept at determining what people wanted to see and where. What information or answer they were searching for, became the catalyst of numerous ad campaigns and my mission for my clients.
</p>

</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="slideInRight" animateOut="" animateOnce={true} delay={100} style={{width:'30%', padding:'5%', order:'2 !important',  zIndex:'0',}} className="color">    

<Image alt="Co-worker talks about Todd Lambert" filename="hats5.png" style={{borderColor:'transparent',}} />

</ScrollAnimation>
 </div>
 
 
 <div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>
 
  <ScrollAnimation animateIn="slideInLeft" animateOut="" animateOnce={true} delay={100} style={{width:'30%', padding:'5%', order:'2 !important',  zIndex:'0',}} className="color">    

<Image alt="Co-worker talks about Todd Lambert" filename="hats6.png" style={{borderColor:'transparent',}} />

</ScrollAnimation>


 <ScrollAnimation animateIn="slideInRight" animateOut="" animateOnce={true} delay={0} style={{width:'70%', zIndex:'1',}}>    
<div className="container speech1" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<h2>Analyst</h2>
<p>
Success online is not simply throwing numbers(visitors) at something. I&apos;ve learned to use site analytics to drive the direction of design and development projects creating a prove-it-or-lose-it type of mantra that defines performance and usability.
</p>

</div>
</ScrollAnimation>
 </div>
 {/* SKILLS TIMELINE */}




<div className="container">
<h3 className="logotype" style={{textAlign:'center', fontSize:'250%',}}>
spotlight
</h3>
</div>

</section>




<section className="  intro section">



      <div className="container" style={{background:'', padding:'2rem',}}>
      <Gallery
        photos={data.allFile.edges}
      />
      </div>
</section>



<section className="about1 outer section" style={{paddingTop:'0', overflow:'hidden',}}>




 <ScrollAnimation animateIn="bounceInUp" animateOut="bounceOutDown" animateOnce={false} delay={100} style={{ zIndex:'1', display:'none',}}>
<div className="container">
<h3 className="logotype" style={{textAlign:'center', fontSize:'250%',}}>
Client List
</h3>
</div>
</ScrollAnimation>





 
 
</section>


<br />
<br />
    

<div className="content outer">
    <Contact />
    </div>


      
    </Layout>
    </CustomBox>
  )
}

export default Gal1Page
