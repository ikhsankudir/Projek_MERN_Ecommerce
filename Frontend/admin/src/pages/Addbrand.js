import React from 'react'
import CustomInput from '../components/Custominput'

const Addbrand = () => {
  return (
    <div>
      <h3 className='mb-4 title'>Tambah Brand Produk</h3>
      <div>
        <form action=''>
          <CustomInput type='text' label='Nama Brand Produk' />
          <button
            className='btn btn-success border-0 rounded-3 my-5'
            type='submit'
          >
            Tambah Brand Produk
          </button>
        </form>
      </div>
    </div>
  )
}

export default Addbrand