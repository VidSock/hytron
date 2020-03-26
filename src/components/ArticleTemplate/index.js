import React from 'react'
import Content from '../Content'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import styled from 'styled-components'

const CustomBox = styled.div`
.taglist{display:flex; margin:.5rem 0;}
.taglist li{display:flex; flex-wrap: nowrap;/*  padding:.2rem .5rem; border:1px dotted; border-radius:7px; */ margin:0 .5rem 1rem 0;}

.taglist li:before{content:'{ '; }
.taglist li:after{content:' }'; }

`

const ArticleTemplate = ({
  content,
  contentComponent,
  cover,
  meta_title,
  meta_desc,
  tags,
  title,
}) => {
  const PostContent = contentComponent || Content
  return (
    <CustomBox>
      
      <img src={cover} alt={title} style={{borderRadius:'12px', marginTop:'1rem',}} />
      
      <div style={{padding:'2% 3%',}}>
      <h1 className='title is-size-2 is-bold-light' style={{textDecoration:'none',}}>
        {title}
      </h1>
      <PostContent content={content} />
      </div>
      <div style={{ marginTop: '0', padding:'2% 3%', }}>
        <h4>Tags</h4>
        <ul className='taglist'>
          {(tags && tags.length)
            ? tags.map(tag => (
              <li key={tag + `tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))
            : null}
        </ul>
      </div>
    </CustomBox>
  )
}

export default ArticleTemplate
