import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { 
  AiOutlineDashboard, 
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBgColors,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { ImBlog } from 'react-icons/im'
import { IoIosNotifications } from 'react-icons/io'
import { FaBloggerB, FaClipboardList } from 'react-icons/fa'
import { SiBrandfolder } from 'react-icons/si'
import { BiCategoryAlt } from 'react-icons/bi' 
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider
          trigger={null} collapsible collapsed={collapsed}
      >
      
        <div className="logo">
          <h2 className='text-white fs-5 text-center py-3 mb-0'>
            <span className='sm-logo'>AC</span>
            <span className='lg-logo'>Admin Control</span>
          </h2>
        </div>
        
        <Menu
        
          theme="dark" 
          mode="inline"
        
          defaultSelectedKeys={['']}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className='fs-4'/>,
              label: 'Dashboard',
            },
            {
              key: 'Customers',
              icon: <AiOutlineUser className='fs-4'/>,
              label: 'Data Pelanggan',
            },
            {
              key: 'Catalog',
              icon: <AiOutlineShoppingCart className='fs-4'/>,
              label: 'Katalog Produk',
              children: [
                {
                  key: 'product',
                  icon: <AiOutlineShoppingCart className='fs-4'/>,
                  label: 'Tambah Produk',
                },
                {
                  key: 'product-list',
                  icon: <AiOutlineShoppingCart className='fs-4'/>,
                  label: 'List Produk',
                },
                {
                  key: 'brand',
                  icon: <SiBrandfolder className='fs-4'/>,
                  label: 'Brand Produk',
                },
                {
                  key: 'list-brand',
                  icon: <SiBrandfolder className='fs-4'/>,
                  label: 'List Brand Produk',
                },
                {
                  key: 'category',
                  icon: <BiCategoryAlt className='fs-4'/>,
                  label: 'Kategori',
                },
                {
                  key: 'list-category',
                  icon: <BiCategoryAlt className='fs-4'/>,
                  label: 'List Kategori',
                },
                {
                  key: 'color',
                  icon: <AiOutlineBgColors className='fs-4'/>,
                  label: 'Warna',
                },
                {
                  key: 'list-color',
                  icon: <AiOutlineBgColors className='fs-4'/>,
                  label: 'List Warna',
                },
              ],
            },
            {
              key: 'order',
              icon: <FaClipboardList className='fs-4'/>,
              label: 'Order',
            },
            {
              key: 'blog',
              icon: <FaBloggerB className='fs-4'/>,
              label: 'Blog',
              children: [
                  {
                key: 'blog',
                icon: <ImBlog className='fs-4'/>,
                label: 'Tambah Blog',
                },
                {
                key: 'blog-list',
                icon: <FaBloggerB className='fs-4'/>,
                label: 'List Blog',
                },
                {
                key: 'blog-category',
                icon: <ImBlog className='fs-4'/>,
                label: 'Tambah Kategori Blog',
                },
                {
                key: 'blog-category-list',
                icon: <FaBloggerB className='fs-4'/>,
                label: 'Blog Kategori',
                },
              ],
            },
            {
              key: 'enquires',
              icon: <FaClipboardList className='fs-4'/>,
              label: 'Enquires',
            },
            
          ]}
        />
      </Sider>
      <Layout className='site-layout'>
        <Header
        className='d-flex justify-content-between ps-1 pe-5' 
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
        {React.createElement (
          collapsed ? MenuFoldOutlined : MenuUnfoldOutlined,
          {
            className: "trigger",
            onClick: () => setCollapsed(!collapsed),
          }
        )}
        <div className='d-flex gap-3 align-items-center'>
          <div className='position-relative'>
            <IoIosNotifications className='fs-4' />
            <span className='badge bg-warning rounded-circle p-1 position-absolute'>
              3
            </span>
          </div>
          <div className='d-flex gap-3 align-items-center dropdown'>
            <div>
              <img
              width={32}
              height={32} 
              src='https://w7.pngwing.com/pngs/429/434/png-transparent-computer-icons-icon-design-business-administration-admin-icon-hand-monochrome-silhouette-thumbnail.png' alt='admin' />
            </div>
            <div           
                role='button' 
                id='dropdownMenuLink' 
                data-bs-toggle='dropdown' 
                aria-expanded='false'>
              <h5 className='mb-0'>SaniTech</h5>
              <p className='mb-0'> Admin@SaniTech.com</p>
            </div>
            <div
            className='dropdown-menu'
            aria-labelledby='dropdownMenuLink'
            >
              <li>
                <a className='dropdown-item py-1 mb-1' style={{ height: "auto", lineHeight: "20px", to:'/' }} href='#'>
                  Lihat Profile
                </a>
              </li>
              <li>
                <a className='dropdown-item py-1 mb-1' style={{ height: "auto", lineHeight: "20px", to:'/' }} href='#'>
                  SignOut
                </a>
              </li>
            </div>
          </div>
        </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;