import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from 'react-rating-stars-component'
import PeactImageZoom from 'react-image-zoom'


const SingleProduct = () => {
  const [orderedProduct, setorderedProduct] = useState(true)
  return (
    <>
    <Meta title={'Nama Produk'} />
      <BreadCrumb title='Nama Produk' />
      <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xl p-3 bg-white'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-product-image'>
                <div></div>
              </div>
            </div>
            <div className='col-6'></div>
          </div>
        </div>
      </div>
      <div className='description-wrapper py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
            <h4>Deskripsi</h4>
            <div className='bg-white p-3'>
              <p>
                sdfsdfgdsfgsdfgsdfgdsfgdsfgdsfg
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <section className='reviews-wrapper home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
            <h3>reviews</h3>
              <div className='review-inner-wrapper'>
              <div className='review-head d-flex justify-content-between align-items-end'>
                <div>
                  <h4 className='mb-2'>Review Pelanggan</h4>
                  <div className='d-flex align-items-center gap-10'>
                  <ReactStars 
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor='#ffd700'
                  />
                  <p className='mb-0'>berdasarkan 2 Review</p>
                  </div>
                </div>
                {orderedProduct && (
                    <div>
                      <a className='text-dark text-decoration-underline' href=''>
                      Tulis Review anda
                      </a>
                    </div>
                  )}
              </div>
              <div className='review-form py-4'>
              <h4>Berikan Review Anda</h4>
              <form action='' className='d-flex flex-column gap-15'>
              <div>
              <ReactStars 
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor='#ffd700'
                  />
              </div>
              <div>
                <textarea name='' id='' 
                className='w-100 form-control' 
                cols='30' rows='4'
                placeholder='Komentar'></textarea>
              </div>
              <div className='d-flex justify-content-end'>
              <button className='button border-0'>Submit Review</button>
              </div>
                  </form>
              </div>
              <div className='reviews mt-4'>
                <div className='review'>
                <div className='d-flex gap-10 align-items-center'>
                  <h6 className='mb-0'>Admin</h6>
                  <ReactStars 
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor='#ffd700'
                  />
                </div>
                  <p className='mt-3'>sadfgijsoaijhgosaihgsoiuhagouidfshgoaiug</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Produk Populer</h3>
          </div>
          </div>
          <div className='row'>
          <ProductCard />
          <ProductCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleProduct