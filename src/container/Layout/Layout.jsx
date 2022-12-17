import React , {useState} from 'react'
import "./Layout.css";
import AssetList from '../ViewAssets/ViewAssets'
import Assets from '../AddAssets/addAssets'
import Setting from '../Setting/Setting'

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  PlusOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import AM from '../../Assets/AM.svg'
import { Layout, Menu, theme } from 'antd';
import {Route, Routes, useNavigate } from 'react-router-dom'

const { Header, Sider, Content } = Layout;


function Layout_Style() {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="App">
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} className='assets__sidebar'>
        <div className="logo">
            <img src={AM} alt='AM'/>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          // defaultSelectedKeys={['/']}
          items={[
            {
              key: '/',
              icon: <PlusOutlined/>,
              label: 'Add Assets',
            },
            {
              key: '/assets',
              icon: <UnorderedListOutlined />,
              label: 'View List',
            },
            {
              key: '/setting',
              icon: <SettingOutlined />,
              label: 'Settings',
            },
          ]}
          onClick = {({key})=>{
            navigate(key)
          }}
        />
      </Sider>

      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Routes>
                <Route path='/' element={<Assets/>}/>
                <Route exact path='assets' element={<AssetList/>}/>
                <Route exact path='setting' element={<Setting/>}/>
          </Routes>
        </Content>
      </Layout>
    </Layout>
    </div>
  );
}

export default Layout_Style;
