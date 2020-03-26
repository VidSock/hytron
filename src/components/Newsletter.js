import React from 'react'
import { navigate } from 'gatsby-link'
// import { FaEnvelope } from 'react-icons/fa'


// const Contact = class extends React.Component {
//   render() {
//     return (
     
//     )
//   }
// }

// export default Contact




function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
       .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      
        <section className="section">
          <div className="container" style={{padding: '5px 0 10px 0', textAlign: 'center', maxWidth: '600px', margin: '0 auto',}}>
          
            <div className="content innerpanel" style={{padding: '0 0 0 0', textAlign: 'left', width: '600px',}}>

              

              

              <form
                name="newsletter"
                method="post"
                action="/contact/newsletter/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                id="popnewsletter-form"
              >
                
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>

<h4 style={{textAlign: 'center', fontSize: '1.5rem', padding: '.3rem 0 .5rem 0',}}>Follow Todd</h4>

<label htmlFor="email" style={{ display: 'flex', justifyContent:'center', alignItems: 'center', padding: '0 2rem', margin: '0 auto', textAlign: 'center', fontSize: '90%', }}>Get email updates and location exclusives</label>

                <div className="form" style={{lineHeight: '1rem', height: 'auto', alignItems: 'center', display: 'flex', flexShrink: '1', paddingTop: '.2rem',}}>
                
 
                <div style={{width:'60%', padding:'0 1rem 0 0',}}>
                    <input
                      className="input font"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={false}
                      placeholder="your@email.com"
                      style={{margin: '0 1rem 0 0', width: '100%',}}
                    />
                    </div>

                <div className="special grad"  style={{ color:'#fff', textDecoration:'none', display:'flex', justifyContent:'center', position:'relative', width:'230px', margin:'0 1rem 0 0', padding:'0 1rem 0px 1rem',}}>
                
<input type="submit" value="Follow Now" className="grad" style={{background:'transparent', border:'none', boxShadow:'none', color:'#fff', cursor:'pointer', float:'left', marginBottom:'0',}} />


</div>
                
                

                
                
                
                </div>
                <div className="font" style={{fontSize: '100%', padding: '20px 3%', textAlign: 'center',}}> <label htmlFor={'consent'}><input type="checkbox" name={'consent'} required={true} style={{transform: 'scale(2)', margin: '0 10px 0 0', background:'#ff0000', color:'#ff0000',}} /> I want to follow by email.</label></div>
                
<div style={{fontSize: '80%', padding: '0px 3%', textAlign: 'center',}}><a style={{textAlign: 'center', paddingTop: '0px', paddingBottom: '0', textDecoration: 'underline',}} href="/privacy">Privacy Policy  (no spam - unsubscribe anytime) </a>
                </div>
              </form>
              
            </div>
          </div>
        </section>      
      
    )
  }
}