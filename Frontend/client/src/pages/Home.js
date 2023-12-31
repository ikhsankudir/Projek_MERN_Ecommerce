import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProducts from '../components/SpecialProducts'

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-6'>
            <div className='main-banner position-relative '>
              <img 
              src='images/main-banner-1.jpg'
              className='img-fluid rounded-3'
              alt='main banner'
              />
              <div className='main-banner-content position-absolute'>
                <h4>Super charged</h4>
                <h3>ipad s34</h3>
                <p>from $0998</p>
                <Link className='button'>Buy Now</Link>
              </div>
            </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
              <div className='small-banner position-relative '>
                <img 
                src='images/catbanner-01.jpg'
                className='img-fluid rounded-3'
                alt='main banner'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>Super charged</h4>
                  <h3>ipad s34</h3>
                  <p>from $0998 <br /> or $123/mo</p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img 
                src='images/catbanner-02.jpg'
                className='img-fluid rounded-3'
                alt='main banner'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>Super charged</h4>
                  <h3>ipad s34</h3>
                  <p>from $0998</p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img 
                src='images/catbanner-03.jpg'
                className='img-fluid rounded-3'
                alt='main banner'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>Super charged</h4>
                  <h3>ipad s34</h3>
                  <p>from $0998</p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img 
                src='images/catbanner-04.jpg'
                className='img-fluid rounded-3'
                alt='main banner'
                />
                <div className='small-banner-content position-absolute'>
                  <h4>Super charged</h4>
                  <h3>ipad s34</h3>
                  <p>from $0998</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service.png' alt='services' />
                  <div>
                    <h6>Gratis Ongkir</h6>
                    <p>Dari 100.000</p>
                  </div> 
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-02.png' alt='services' />
                  <div>
                  <h6>Gratis Ongkir</h6>
                    <p>Dari 100.000</p>
                  </div> 
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-03.png' alt='services' />
                  <div>
                  <h6>Gratis Ongkir</h6>
                    <p>Dari 100.000</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-04.png' alt='services' />
                  <div>
                  <h6>Gratis Ongkir</h6>
                    <p>Dari 100.000</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-05.png' alt='services' />
                  <div>
                  <h6>Gratis Ongkir</h6>
                    <p>Dari 100.000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>camera</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera'/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>camera</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera'/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>camera</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera'/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>camera</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera'/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>camera</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera'/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>camera</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera'/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>camera</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera'/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>camera</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='featured-wrapper py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Koleksi Kami</h3>
          </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className='famous-wrapper py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
              <img src='images/catbanner-01.jpg' className='img-fluid' alt='' />
                <div className='famous-content position-absolute'>
                <h5>Layar lebar</h5>
                <h6>jam pintar series7</h6>
                <p>from $234234 $234/mo for 24/mo</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
              <img src='images/catbanner-01.jpg' className='img-fluid' alt='' />
                <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Layar lebar</h5>
                <h6 className='text-dark'>jam pintar series7</h6>
                <p className='text-dark'>from $234234 $234/mo for 24/mo</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
              <img src='images/catbanner-01.jpg' className='img-fluid' alt='' />
                <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Layar lebar</h5>
                <h6 className='text-dark'>jam pintar series7</h6>
                <p className='text-dark'>from $234234 $234/mo for 24/mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Spesial Produk</h3>
            </div>
          </div>
          <div className='row'>
            <SpecialProducts />
            <SpecialProducts />
            <SpecialProducts />
            <SpecialProducts />
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
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className='marque-wrapper py-5'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-01.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-02.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-03.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-04.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-05.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-06.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-07.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-08.png' alt='brand' />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>      
      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Blogs Terbaru</h3>
          </div>
          </div>
          <div className='row'>
            <div className='col-3'>
            <BlogCard />
            </div>
            <div className='col-3'>
            <BlogCard />
            </div>
            <div className='col-3'>
            <BlogCard />
            </div>
            <div className='col-3'>
            <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home