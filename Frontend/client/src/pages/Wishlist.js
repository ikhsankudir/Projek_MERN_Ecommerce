import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Wishlist = () => {
  return (
    <>
      <Meta title={'Wishlist'} />
      <BreadCrumb title='wishlist' />
      <div className='wishlist-wrapper home-wrapper-2 py-5'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-3'>
              <div className='wishlist-card position-relative'>
                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                <div className='wishlist-card-image'>
                  <img src='images/watch.jpg' className='img-fluid w-100' alt='watch'/>
                </div>
                <div className='py-3 px-3'>
                <h5 className='title'>asfwsafawsdfsdafsdff</h5>
                <h6 className='price'>Rp. 200.000</h6> 
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='wishlist-card position-relative'>
                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                <div className='wishlist-card-image'>
                  <img src='images/watch.jpg' className='img-fluid w-100' alt='watch'/>
                </div>
                <div className='py-3 px-3'>
                <h5 className='title'>asfwsafawsdfsdafsdff</h5>
                <h6 className='price'>Rp. 200.000</h6> 
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='wishlist-card position-relative'>
                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                <div className='wishlist-card-image'>
                  <img src='images/watch.jpg' className='img-fluid w-100' alt='watch'/>
                </div>
                <div className='py-3 px-3'>
                <h5 className='title'>asfwsafawsdfsdafsdff</h5>
                <h6 className='price'>Rp. 200.000</h6> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist