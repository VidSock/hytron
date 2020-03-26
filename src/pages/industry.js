
import React from 'react'
import Layout from '../components/Layout'
// import Install from '../components/Install'
import { graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
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

.intro:before, .intro:after{display:none !important}
body.dark:after, body.light:after{

content: (''); background-image: url('../img/hytron-bg1.svg') !important; height: 100vh; width:100%; background-size: cover; position:fixed; top:0; left:0; z-index:-1; animation: fadeIn 6s;
}




@media (min-width: 50rem) {
.speech1{padding:20px 50px !important;}
}

@media (max-width: 48rem) {
.intro:before{font-size:200%;}
.speech:after {right: -28px;}
.nowrap{display:block !important; width:100% !important;
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


const industry = graphql`
  query industry {
    allFile(filter: { relativeDirectory: { eq: "parts1" } }) {
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
  const data = useStaticQuery(industry)
  return (
    
 
    
    
	  <CustomBox>
       <Helmet>
          <html lang="en" className="nobg" />
    </Helmet>
    <Layout>

<section className="about1 outer section" style={{paddingTop:'0', overflow:'hidden',}}>




<div className="container" style={{padding:'10px'}}>
<h3 className="" style={{textAlign:'center', fontSize:'160%',}}>
Design, Manufacturing and Testing Capabilities
</h3>
</div>



<div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'100%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="slideInLeft" animateOut="" animateOnce={true} delay={100} style={{width:'', zIndex:'1',}}>    
<div className="container speech" style={{ width:'100%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative', boxShadow: '0px 0px 5px 0px black', }}>

<p>
{/* <span className="txtshadow-header" style={{fontSize:'500%', color:'#ccc', position:'absolute', top:'-5px', left:'-10px',}}>&#10077;</span><br />
<span className="txtshadow-header" style={{fontSize:'500%', color:'#ccc', position:'absolute', bottom:'-15px', right:'-10px',}}>&#10078;</span><br /> */}



<h2>Quality Management System</h2>

<p>We have developed and implemented a Quality Management System (QMS) to help our company demonstrate its ability to provide products that exceed customer requirements and to operate with increased effectiveness and efficiency with the overall aim of enhancing customer satisfaction.</p>

<p>Our system utilizes the process approach and quality management principles contained in the International Standards ISO 9001 and AS 9100.</p>

<p>Our QMS is certified to all applicable requirements contained in ISO 9001 and AS 9100, the scope of which covers the manufacture of all company products, and encompasses all operations at our facility.</p>

<p><strong>Hytron’s QMS received formal certification from NSF International.</strong></p>


</p>

</div>
</ScrollAnimation>







 <ScrollAnimation animateIn="slideInRight" animateOut="" animateOnce={true} delay={100} style={{width:'100%', padding:'0', order:'2 !important',  zIndex:'0',}}> 
 
     <br />
 
 <div className="imgbox grad container" style={{border:'0px solid #222', position:'relative', margin:'0 0 0 0', borderRadius:'', padding:'0', marginLeft:'1rem', overflow:'hidden',}}>
 
 <Image alt="Co-worker talks about Todd Lambert" filename="IMG_2506.jpg" style={{borderColor:'transparent',}} />
 
 <div className="txtshadow" style={{position:'absolute', left:'0', bottom:'5px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}>Calibrated Doo Hickey</div>
 
 

 </div>
  
  <br />

<div className="imgbox container" style={{border:'0px solid #fff', position:'relative', margin:'0 0 0 0', borderRadius:'', padding:'2rem', marginLeft:'1rem', overflow:'hidden', background:'#222', color:'#fff',}}>

<h4>Inspection Equipment</h4>

<ul>
<li>Tesa Micro-Hite CMM</li>
<li>Brown & Sharpe Gage 2000 CMM</li>
<li>Scherr-Tumico Quadra-Check 200 Comparator</li>
<li>Scheer-Tumico 14” Optical Comparator</li>
<li>Rockwell Hardness Tester</li>
<li>Surface Plates 24" x 48" Max</li>
<li>Extensive line of Quality Measuring Equipment</li>
</ul>


</div>
</ScrollAnimation>

 </div>
 
 
 
 








<div className="container" style={{padding:'10px'}}>
<h3 className="" style={{textAlign:'center', fontSize:'160%',}}>
Examples Of Our Work
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
