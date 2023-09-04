import React from 'react'
import CustomInput from '../components/Custominput'
const Forgotpassword = () => {
  return (
    <div className='py-5' style={{ background: "#1890ff", minHeight: "100vh" }}>
    <br />
    <br />
    <br />
    <br />
    <br />
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center title'>Lupa Password</h3>
        <p className='text-center '>Silahkan Masukkan Email Pendaftaran Untuk Mereset Password</p>
        <form action=''>

          <CustomInput 
          type='text' 
          label='Email Address' 
          id='email' />

          <button
            className='border-0 px-3 py-2 text-white fw-bold w-100'
            style={{ background: "#1890ff" }}
            type='submit'
          >
            Kirim Link
          </button>
        </form>
      </div>
    </div>
  )
}

export default Forgotpassword