import React, { useCallback, useState } from 'react'
import CustomInput from '../components/Custominput'
import ReacQUill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
// import { Stepper } from 'react-form-stepper'
import { InboxOutlined } from '@ant-design/icons'
import { message, Upload } from 'antd';
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

const Addblog = () => {
  const [desc, setDesc] = useState();
  const handleDesc = (e) => {
    console.log(e)
  }
  return (
    <div>
      <h3 className='mb-4 title'>Tambah Blog</h3>
      {/* <Stepper 
        steps={[
        { label: 'Tambah Detail Blog 1'}, 
        {label: 'Upload Gambar Blog'}, 
        {label: 'Selesai'}]}
        activeStep={1}
      /> */}
      <div className=''>
        <form action=''>
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
          <div className='mt-4'>
          <CustomInput type="text" label="Silahkan Isi Judul Blog" />
          </div>
          <select name='' className='form-control py-3 mb-3' id=''>
            <option value=''>Pilih Kategori Blog</option>
          </select>
          <ReacQUill
            theme='snow'
            value={desc}
            onChange={(evt) => {
              handleDesc(evt)
            }}
          />
        </form>
      </div>
    </div>
  )
}

export default Addblog