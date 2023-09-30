import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <Meta title={'Masuk'} />
      <BreadCrumb title='Masuk' />
      <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Masuk Akun</h3>
              <form action='' className='d-flex flex-column gap-15'>
                <div>
                  <input type='email' name='email' placeholder='Email' className='form-control' />
                </div>
                <div>
                  <input type='password' name='password' placeholder='Password' className='form-control'/>
                </div>
                <div className='mt-1'>
                  <Link to='/forgot-password'>Lupa Password ?</Link>
                  <div className='mt-3 d-flex justify-content gap-15 align-items-center'>                  
                  <button className='button border-0'>Masuk</button>
                  <Link to='/Signup' className='button signup'>Daftar</Link>
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

export default Login