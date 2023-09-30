import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link, useLocation } from 'react-router-dom'
const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation()

  return (
    <>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
      <div className={location.pathname === "/store" ? `gr-${grid}` : "col-3"}>
    <Link to=':id' className='line'>
      <div className='product-card mb-3 position-relative'>
        <div className='wishlist-icon position-absolute'>
          <Link><img src='images/wish.svg' alt='wishlist' /></Link>
        </div>
        <div className='product-image'>
          <img src='images/watch.jpg' className='img-fluid' alt='product' />
          <img src='images/tab.jpg' className='img-fluid' alt='product' />
        </div>
        <div className='product-details'>
          <h6 className='brand'>havels</h6>
          <h5 className='product-title'>
            Kids Headphones
          </h5>
            <ReactStars 
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor='#ffd700'
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat...</p>
          <p className='price'>$ 324434</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column gap-15'>
            <Link>
              <img src='images/prodcompare.svg' alt='compare' />
            </Link>
            <Link>  
              <img src='images/view.svg' alt='view' />
            </Link>
            <Link>
              <img src='images/add-cart.svg' alt='addcart' />
            </Link>
          </div>
        </div>
      </div>
    </Link>
    </div>

    {/*  */}

    <div className={location.pathname === "/store" ? `gr-${grid}` : "col-3"}>
    <Link className='line'>
      <div className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
          <Link><img src='images/wish.svg' alt='wishlist' /></Link>
        </div>
        <div className='product-image'>
          <img src='images/watch.jpg' className='img-fluid' alt='product' />
          <img src='images/tab.jpg' className='img-fluid' alt='product' />
        </div>
        <div className='product-details'>
          <h6 className='brand'>havels</h6>
          <h5 className='product-title'>
            Kids Headphones
          </h5>
            <ReactStars 
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor='#ffd700'
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat...
            </p>
          <p className='price'>$ 324434</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column gap-15'>
            <Link>
              <img src='images/prodcompare.svg' alt='compare' />
            </Link>
            <Link>  
              <img src='images/view.svg' alt='view' />
            </Link>
            <Link>
              <img src='images/add-cart.svg' alt='addcart' />
            </Link>
          </div>
        </div>
      </div>
    </Link>
    </div>
    </>
  )
}

export default ProductCard