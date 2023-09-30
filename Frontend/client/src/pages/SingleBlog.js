import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'


const Singleblog = () => {
  return (
    <>
    <Meta title={'Dynamic blog name'} />
    <BreadCrumb title='Dynamic blog name' />
    <div className='blog-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
          <div className='single-blog-card'>
          <Link to='/blog' className='d-flex align-items-center gap-10'> 
          <HiOutlineArrowLeft className='fs-4'/> Kembali ke Blog
          </Link>
            <h3 className='title'>sunday morning</h3>
          <img 
            src='images/blog-1.jpg' 
            className='img-fluid w-100 my-4' />
            <p>
              hgbadihgabdlljhbsalkjdb
              jsadhjsdha
              jshbdljshgbdljk
            </p>
          </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Singleblog