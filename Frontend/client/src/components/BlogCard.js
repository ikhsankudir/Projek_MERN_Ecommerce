import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
      <div className='blog-card'>
        <div className='card-image'>
          <img src='images/blog-1.jpg' className='img-fluid w-100' alt='blog' />
        </div>
        <div className='blog-content'>
          <p className='date'>1 des. 2022</p>
          <h5 className='title'> sunday morning</h5>
          <p className='desc'>
            adfsdfgsdgdfdfdfgdfg
          </p>
          <Link to='/' className='button'>
            Read More
          </Link>
        </div>
      </div>
  )
}

export default BlogCard