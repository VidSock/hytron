import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'

const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className='section outer'>



        <div className='container'>

                <PageContent className='content' content={content} />
<h1 className='title'>
                    {title}
                  </h1>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default AboutPageTemplate
