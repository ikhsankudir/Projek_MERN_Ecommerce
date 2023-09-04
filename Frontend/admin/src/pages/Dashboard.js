import React from 'react'
import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs'
import { Column } from '@ant-design/plots';
import { Table } from 'antd'
const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}
const Dashboard = () => {
  const data = [
    {
      type: 'Jan',
      sales: 38,
    },
    {
      type: 'Feb',
      sales: 52,
    },
    {
      type: 'Mar',
      sales: 61,
    },
    {
      type: 'Apr',
      sales: 145,
    },
    {
      type: 'Mei',
      sales: 48,
    },
    {
      type: 'Jun',
      sales: 38,
    },
    {
      type: 'Jul',
      sales: 38,
    },
    {
      type: 'Agu',
      sales: 38,
    },
    {
      type: 'Sep',
      sales: 38,
    },
    {
      type: 'Okt',
      sales: 38,
    },
    {
      type: 'Nov',
      sales: 38,
    },
    {
      type: 'Des',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: ({ type }) => {
      return "#1890ff";
    },
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Bulan',
      },
      sales: {
        alias: 'Pendapatan',
      },
    },
  };
  return (
    <div>
      <h3 className='mb-4 title'>Dashboard</h3>
      <div className='d-flex justify-content-between align-items-center gap-3'>
        <div className='shadow-sm d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
          <div>
            <p className='desc'>Total</p> 
            <h4 className='mb-0 sub-title'>Rp.1100</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
          <h6>
          <BsArrowDownRight />32%
          </h6>
            <p className='mb-0 desc'>Compare To April 2022</p>
          </div>
        </div>
        <div className='shadow-sm d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
          <div>
            <p className='desc'>Total</p>
            <h4 className='mb-0 sub-title'>Rp.11000</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
          <h6 className='red'>
          <BsArrowDownRight />32%
          </h6>
            <p className='mb-0 desc'>Compare To April 2022</p>
          </div>
        </div>
        <div className='shadow-sm d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
          <div>
            <p className='desc'>Total</p>
            <h4 className='mb-0 sub-title'>Rp.1000</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
          <h6 className='green'>
          <BsArrowDownRight />32%
          </h6>
            <p className='mb-0 desc'>Compare To April 2022</p>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='mb-5 title'>Statistik Pendapatan</h3>
        <div>
        <Column {...config} />
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='mb-5 title'>Orderan Baru</h3>
        <div>
        <Table columns={columns} dataSource={data1} />
        </div>
      </div>

      <div></div>
      <div></div>
    </div>
  )
}

export default Dashboard