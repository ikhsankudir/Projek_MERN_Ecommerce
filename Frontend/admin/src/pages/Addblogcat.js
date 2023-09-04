import React from 'react'
import CustomInput from '../components/Custominput'

const Addblogcat = () => {
  return (
    <div>
      <h3 className='mb-4 title'>Tambah Kategori Blog</h3>
      <div>
        <form action=''>
          <CustomInput type='text' label='Nama Kategori Blog' />
          <button
            className='btn btn-success border-0 rounded-3 my-5'
            type='submit'
          >
            Tambah Kategori Blog
          </button>
        </form>
      </div>
    </div>
  )
}

export default Addblogcat