import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>
              Gratis Ongkir & Return Barang</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>
                Hubungi <a href='0812381203'>01230239403</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link className='text-white'>SaniTech</Link>
              </h2>
            </div>
            <div className='col-5'>
              <div className='input-group'>
                <input 
                  type='text'
                  className='form-control py-2'
                  placeholder='Cari Produk'
                  aria-label='cari produk'
                  aria-describedby='basic-addon2'
                />
                <span className='input-group-text' id='basic-addon2'>
                  <BsSearch className='fs-6'/>
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src='images/compare.svg' alt='bandingkan' />
                    <p className='mb-0 me-0'>Bandingkan <br /> Produk</p>
                  </Link>
                </div>
                <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src='images/wishlist.svg' alt='Wishlist' />
                    <p className='mb-0'>Produk <br /> Whistlist</p>
                  </Link>
                </div>
                <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src='images/user.svg' alt='masuk' />
                    <p className='mb-0'>Masuk</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center text-white'>
                  <img src='images/cart.svg' alt='' />
                    <div className='position-relative d-flex flex-column gap-10'>
                      <h5><span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger'>10</span></h5>
                      <p className='ms-1'>Rp. 100.200</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                  <div className='dropdown'>
                    <button className='btn btn-secondary dropdown-toggle bg-transparent border-0' 
                    type='button' 
                    id='dropdownMenuBottom1'
                    data-bs-toggle='dropdown' 
                    aria-expanded='false'>
                    <img src='images/menu.svg' alt='' />
                    <span className='me-4 ms-2 d-inline-block' >
                    Kategori
                    </span>
                    </button>
                      <ul className='dropdown-menu' aria-labelledby='dropdownMenuBottom1'>
                        <li><Link className='dropdown-item text-white' to="">Action</Link></li>
                        <li><Link className='dropdown-item text-white' to="">Another action</Link></li>
                        <li><Link className='dropdown-item text-white' to="">Something else here</Link></li>
                      </ul>
                </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/store'>Toko Kami</NavLink>
                    <NavLink to='/Blog'>Blogs</NavLink>
                    <NavLink to='/Contact'>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
// badge bg-warning rounded-circle p-1 position-absolute
export default Header