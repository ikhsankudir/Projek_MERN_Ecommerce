import React from 'react'
import CustomInput from '../components/Custominput'

const Addcat = () => {
  return (
    <div>
      <h3 className='mb-4 title'>Tambah Kategori Produk</h3>
      <div>
        <form action=''>
          <CustomInput type='text' label='Nama Kategori Produk' />
          <button
            className='btn btn-success border-0 rounded-3 my-5'
            type='submit'
          >
            Tambah Kategori Produk
          </button>
        </form>
      </div>
    </div>
  ) 
}

export default Addcat