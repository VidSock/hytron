import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
// import Gallery1 from '../components/Gallery1'
import Navbar from '../components/Navbar'
import config from '../../config'
// import Install from '../components/Install'
import PopContact from '../components/PopContact'
import 'typeface-lobster-two'
import 'typeface-hammersmith-one'

import "../css/index.scss"
import Consent from '../components/Consent'

// import splash from '../img/hytron-splash.png'



// import ScrollAnimation from 'react-animate-on-scroll'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from "gatsby"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}





    
    
const TemplateWrapper = ({ children }) => {
  



  const { title, description } = useSiteMetadata()
  return (
    <><div id="topofpage" name="topofpage"> </div>
      <Helmet>
        <html lang="en" id="herohead" />
        <title>{config.siteTitle}</title>
          <meta name='description' content={config.siteDescription} />

        

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`} />
        
        
        <link rel="apple-touch-icon" sizes="180x180" href="/siteimages/apple-splashapple-icon-180.png" />
<link rel="apple-touch-icon" sizes="167x167" href="/siteimages/apple-splashapple-icon-167.png" />
<link rel="apple-touch-icon" sizes="152x152" href="/siteimages/apple-splashapple-icon-152.png" />
<link rel="apple-touch-icon" sizes="120x120" href="/siteimages/apple-splashapple-icon-120.png" />

<meta name="apple-mobile-web-app-capable" content="yes" />

<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-2048-2732.png"
    media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-2732-2048.png"
    media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-1668-2388.png"
    media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-2388-1668.png"
    media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-1668-2224.png"
    media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-2224-1668.png"
    media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-1536-2048.png"
    media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-2048-1536.png"
    media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-1242-2688.png"
    media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-2688-1242.png"
    media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-1125-2436.png"
    media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-2436-1125.png"
    media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-828-1792.png"
    media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-1792-828.png"
    media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-1242-2208.png"
    media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-2208-1242.png"
    media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-750-1334.png"
    media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-1334-750.png"
    media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-640-1136.png"
    media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
<link rel="apple-touch-startup-image"
    href="/siteimages/apple-splash-1136-640.png"
    media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />











      </Helmet>
      
 
      <Navbar />
      <PopContact />
  
      <main>{children}</main>

      <Consent />
    


   
      <Footer />
      </>
    
  )
}

export default TemplateWrapper





