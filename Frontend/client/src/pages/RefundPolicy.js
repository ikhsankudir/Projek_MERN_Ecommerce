import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'


const RefundPolicy = () => {
  return (
    <>
    <Meta title={'Kebijakan Pengembalian'} />
      <BreadCrumb title='Kebijakan Pengembalian' />
      <section className='policy-wrapper py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <div className='policy'></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RefundPolicy