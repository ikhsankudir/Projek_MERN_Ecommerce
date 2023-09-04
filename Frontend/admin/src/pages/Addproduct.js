import {  React, useState } from 'react'
import CustomInput from '../components/Custominput'
import ReacQUill from 'react-quill';
import { InboxOutlined } from '@ant-design/icons'
import { message, Upload } from 'antd';
import 'react-quill/dist/quill.snow.css'

const { Dragger } = Upload;
const props = {
  name : 'file',
  multiple: true,
  action: '',
  onChange(info) {
    const { status } = info.file;
    if  (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if ( status === 'done') {
      message.success('${info.file.name} Upload file Berhasil')
    } else if ( status === 'error' ){
      message.error('${info.file.name} Upload File Gagal')
    }
  },
  onDrop(e) {
    console.log("Drop File", e.dataTransfer.files)
  }
}




const AddProduct = () => {
  const [desc, setDesc] = useState();
  const handleDesc = (e) => {
    console.log(e)
  };
  return (
    <div>
      <h3 className='mb-4 title'>Tambah Produk</h3>
      <div>
        <form action=''>
          <CustomInput type='text' label='Nama Produk' />
          <div className='mb-3'>
          <ReacQUill
            theme='snow'
            value={desc}
            onChange={(evt) => {
              handleDesc(evt)
            }}
          />
          </div>
          <CustomInput type='number' label='Harga Produk' />
          <select name='' className='form-control py-3 mb-3' id=''>
            <option value=''>Pilih Brand Produk</option>
          </select>
          <select name='' className='form-control py-3 mb-3' id=''>
            <option value=''>Pilih Kategori Produk</option>
          </select>
          <select name='' className='form-control py-3 mb-3' id=''>
            <option value=''>Pilih Warna Produk</option>
          </select>
          <CustomInput type='number' label='Harga Produk' />
          <Dragger {...props}>
            <p className='ant-upload-drag-icon'>
              <InboxOutlined />
            </p>
            <p className='ant-upload-text'>
              Klik Atau Drag File Ke Area Untuk Upload
            </p>
            <p className='ant-upload-hint'>
            dukungan untuk unggahan tunggal atau massal. melarang keras mengunggah data perusahaan atau file band lainnya
            </p>
        </Dragger>

          <button
            className='btn btn-success border-0 rounded-3 my-5'
            type='submit'
          >
            Tambah Produk
          </button>
        </form>
      </div>
    </div>
  )
}

export default  AddProduct
