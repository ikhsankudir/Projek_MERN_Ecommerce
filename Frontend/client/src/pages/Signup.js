import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'


const Signup = () => {
  return (
    <>
      <Meta title={'Daftar'} />
      <BreadCrumb title='Daftar' />
      <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Daftar Akun</h3>
              <form action='' className='d-flex flex-column gap-15'>
              <div>
                <input type='text' name='name' placeholder='Nama' className='form-control' />
                </div>
                <div>
                  <input type='email' name='email' placeholder='Email' className='form-control' />
                </div>
                <div>
                  <input type='tel' name='mobile' placeholder='No.Telp' className='form-control' />
                </div>
                <div>
                  <input type='password' name='password' placeholder='Password' className='form-control'/>
                </div>
                <div className='mt-1'>
                  <div className='d-flex justify-content flex-column gap-15 align-items-center'>                  
                  <button className='button border-0'>Buat Akun</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup