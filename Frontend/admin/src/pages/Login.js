import React from 'react'
import CustomInput from '../components/Custominput'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='py-5' style={{ background: "#272829", minHeight: "100vh" }}>
    <br />
    <br />
    <br />
    <br />
    <br />
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center title'>Login</h3>
        <p className='text-center'>Untuk Melanjutkan Silahkan Masuk Terlebih Dahulu</p>
        <form action=''>
          <CustomInput type='text' label='Email Address' id='email' />
          <CustomInput type='password' label='Password' id='pass' />
          <div className='text-end mb-3'>
            <Link to='lupa-password' className=''>
              Lupa Password?
            </Link>
          </div>
          <Link
            to='/admin'
            className='border-0 px-5 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5'
            style={{ background: "#3F72AF" }}
            type='submit'
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login