import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Contact = () => {
  return (
    <>
      <Meta title={'Hubungi Kami'} />
      <BreadCrumb title='Hubungi Kami' />
      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <iframe
                src='MapsLink'
                width='600'
                height='400'
                className='border-0 w-100'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type='text' className='form-control' placeholder='Nama'/>
                    </div>
                    <div>
                      <input type='text' className='form-control' placeholder='Email' />
                    </div>
                    <div>
                      <input type='tel' className='form-control' placeholder='No-Hp'/>
                    </div>
                    <div>
                      <textarea name='' id='' className='w-100 form-control' cols='30' rows='4' placeholder='Komentar'></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Berikan Tanggapan Anda</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Contact