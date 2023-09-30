import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Color from '../components/Color'

const compareProduct = () => {
  return (
    <>
      <Meta title={'Bandingkan Product'} />
      <BreadCrumb title='Bandingkan Product' />
      <div className='compare-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-3'>
              <div className='compare-product-card position-relative'>
              <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                <div className='product-card-image'>
                <img src='images/watch.jpg' alt='watch' />
                </div>
                <div className='compare-product-details'>
                  <h5 className='title'>
                    Honor t1 7 gb Ram 8 gb 7 inc with wifi-5g
                  </h5>
                  <h6 className='price mb-3 mt-3'>Rp.200.000.000</h6>
                  <div>
                    <div className='product-detail'>
                      <h5>Brand:</h5>
                      <p>Havels</p>
                    </div>
                    <div className='product-detail'>
                      <h5>Type:</h5>
                      <p>Jam</p>
                    </div>
                    <div className='product-detail'>
                      <h5>Tersedia:</h5>
                      <p>Stock Tersedia</p>
                    </div>
                    <div className='product-detail'>
                      <h5>Warna:</h5>
                      <Color />
                    </div>
                    <div className='product-detail'>
                      <h5>Ukuran:</h5>
                      <div className='d-flex gap-10'>
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='compare-product-card position-relative'>
              <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                <div className='product-card-image'>
                <img src='images/watch.jpg' alt='watch' />
                </div>
                <div className='compare-product-details'>
                  <h5 className='title'>
                    Honor t1 7 gb Ram 8 gb 7 inc with wifi-5g
                  </h5>
                  <h6 className='price mb-3 mt-3'>Rp.200.000.000</h6>
                  <div>
                    <div className='product-detail'>
                      <h5>Brand:</h5>
                      <p>Havels</p>
                    </div>
                    <div className='product-detail'>
                      <h5>Type:</h5>
                      <p>Jam</p>
                    </div>
                    <div className='product-detail'>
                      <h5>Tersedia:</h5>
                      <p>Stock Tersedia</p>
                    </div>
                    <div className='product-detail'>
                      <h5>Warna:</h5>
                      <Color />
                    </div>
                    <div className='product-detail'>
                      <h5>Ukuran:</h5>
                      <div className='d-flex gap-10'>
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default compareProduct