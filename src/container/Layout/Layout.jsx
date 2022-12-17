import React , {useState} from 'react'
import "./Layout.css";
import { Outlet} from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  PlusOutlined,
  UnorderedListOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import AM from '../../Assets/AM.svg'
import { Layout, Menu, theme } from 'antd';
import {useNavigate } from 'react-router-dom'

const { Header, Sider, Content } = Layout;


function Layout_Style() {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const logout =()=>{
    localStorage.removeItem('token')
    navigate('/')
  }

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
          items={[
            {
              key: '/main',
              icon: <PlusOutlined/>,
              label: 'Add Assets',
            },
            {
              key: '/main/assets',
              icon: <UnorderedListOutlined />,
              label: 'View List',
            },
            {
              key: '/main/setting',
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
          <button onClick={logout}> <LogoutOutlined/> Logout </button>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
    </div>
  );
}

export default Layout_Style;
