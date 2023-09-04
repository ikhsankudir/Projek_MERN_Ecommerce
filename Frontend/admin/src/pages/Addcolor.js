import React from 'react'
import CustomInput from '../components/Custominput'

const Addcolor = () => {
  return (
    <div>
      <h3 className='mb-4 title'>Tambah Warna</h3>
      <div>
        <form action=''>
          <CustomInput type='color' label='Masukkan Warna' />
          <button
            className='btn btn-success border-0 rounded-3 my-5'
            type='submit'
          >
            Tambah Warna
          </button>
        </form>
      </div>
    </div>
  )
}

export default Addcolor