import React from 'react'
import CustomInput from '../components/Custominput'
const Resetpassword = () => {
  return (
    <div className='py-5' style={{ background: "#1890ff", minHeight: "100vh" }}>
    <br />
    <br />
    <br />
    <br />
    <br />
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center title'>Reset Password</h3>
        <p className='text-center'>Silahkan Masukkan Password Baru Anda</p>
        <form action=''>
          <CustomInput type='password' label='Password Baru' id='pass' />
          <CustomInput type='password' label='Ulangi Password' id='confirmpass' />
          <button
            className='w-25 border-0 box py-2 text-white fw-bold w-100'
            style={{ background: "#1890ff" }}
            type='submit'
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  )
}

export default Resetpassword