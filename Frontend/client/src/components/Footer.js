import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsYoutube, BsInstagram, BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
<>
  <footer className='py-4'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-5'>
          <div className='footer-top-data d-flex gap-30 align-items-center'>
            <img src='images/newsletter.png' alt='newsletter' />
            <h2 className='mb-0 text-white'> Daftar Untuk Berita Terbaru</h2>
          </div>
        </div>
        <div className='col-7'>
          <div className='input-group'>
                <input 
                  type='text'
                  className='form-control py-2'
                  placeholder='Email Anda...'
                  aria-label='Email Anda...'
                  aria-describedby='basic-addon2'
                />
                <span className='input-group-text p-2' id='basic-addon2'>
                  Subscribe
                </span>
              </div>
        </div>
      </div>
    </div>
  </footer>
  <footer className='py-4'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-4'>
          <h4 className='text-white mb-4'>Hubungi Kami</h4>
          <div>
            <address className='text-white fs-6'> Hno : 1234 ner kas, <br /> asdoasn, sad <br /> 12341
            </address>
            <a href='tel:+62 943583945' className='mt-3 d-block mb-2 text-white'>
            943583945
            </a>
            <a href='mailto:ikhsankudir@gmail.com' className='mt-2 d-block mb-0 text-white'>
              ikhsankudir@gmail.com
            </a>
            <div className='social_icons d-flex align-items-center gap-30 py-4'>
              <a className='text-white' href ='#'>
                <BsLinkedin className='fs-4' />
              </a>
              <a className='text-white' href ='#'>
                <BsInstagram className='fs-4' />
              </a>
              <a className='text-white' href ='#'>
                <BsGithub className='fs-4' />
              </a>
              <a className='text-white' href ='#'>
                <BsYoutube className='fs-4'/>
              </a>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <h4 className='text-white mb-4'>Informasi</h4>
          <div className='footer-link d-flex flex-column'>
            <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
            <Link className='text-white py-2 mb-1'>Refund Policy</Link>
            <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
            <Link className='text-white py-2 mb-1'>Blogs</Link>
          </div>
        </div>
        <div className='col-3'>
          <h4 className='text-white mb-4'>Akun</h4>
          <div className='footer-link d-flex flex-column'>
            <Link className='text-white py-2 mb-1'>Tentang Kami</Link>
            <Link className='text-white py-2 mb-1'>Faq</Link>
            <Link className='text-white py-2 mb-1'>Kontak</Link>
          </div>
        </div>
        <div className='col-2'>
          <h4 className='text-white mb-4'>Links</h4>
          <div className='footer-link d-flex flex-column'>
            <Link className='text-white py-2 mb-1'>Laptop</Link>
            <Link className='text-white py-2 mb-1'>Headphone</Link>
            <Link className='text-white py-2 mb-1'>Komputer</Link>
            <Link className='text-white py-2 mb-1'>Monitor</Link>
          </div>
        </div>
    </div>
    </div>
  </footer>
  <footer className='py-4'>
    <div className='container-xxl'>
    <div className='row'>
      <div className='col-12'>
        <div className='text-center mb-0 text-white'>
          <p className='text-center mb-0 text-white'>
            &copy; {new Date().getFullYear()}; Powerd By SaniTech
          </p>
        </div>
      </div>
    </div>
    </div>
  </footer>
</>
  )
}

export default Footer