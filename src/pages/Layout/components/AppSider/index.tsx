import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  PoweroffOutlined,
} from '@ant-design/icons'
import { Button, Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import React, { useEffect, useState } from 'react'
import { Routes, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { routeRender } from '../../../../router'
import '../../sider.scss'

const { Header, Sider, Content } = Layout
import { Link } from 'react-router-dom'
import { routes } from '../../../../router/routes'
import { removeToken } from '@/utils/token'

const { SubMenu, Item } = Menu

interface renderItem {
  path: string
  name?: null | string
  icon?: null | undefined
  hidden?: null | undefined | Boolean
  children?: Array<renderItem> | null | undefined
}
// 无二级菜单
const renderMenuItem = ({ path, name, icon = null }: renderItem) => {
  const Menus = (
    <Item key={path} icon={<UserOutlined />}>
      <Link to={path}>
        <span>{name}</span>
      </Link>
    </Item>
  )
  return Menus
}

// 包含二级菜单
const renderSubMenu = ({
  path,
  name,
  icon = null,
  hidden,
  children,
}: renderItem) => {
  const Menus = (
    <SubMenu key={path} icon={<UserOutlined />} title={name}>
      {children?.map((item) => renderMenuItem(item))}
    </SubMenu>
  )
  if (hidden) {
    return null
  } else {
    return Menus
  }
}

const AppSider: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  let location = useLocation()

  // 只展开一级菜单
  const [openKeys, setOpenKeys] = useState<any>([])
  const [selectedKeys, setSelectedKeys] = useState<any>([])
  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    if (keys.length === 0 || keys.length === 1) {
      setOpenKeys(keys)
      return
    }
    // const latestOpenKey: any = keys.find((key) => openKeys.indexOf(key) === -1)
    const latestOpenKey = keys[keys.length - 1]

    if (latestOpenKey.includes(keys[0])) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
    console.log(keys, latestOpenKey, openKeys)
  }

  // 处理 pathname
  const getOpenKeys = (string: string) => {
    let newStr = '',
      newArr = [],
      arr = string.split('/').map((i) => '/' + i)
    for (let i = 1; i < arr.length - 1; i++) {
      newStr += arr[i]
      newArr.push(newStr)
    }
    console.log('newArr', newArr)
    return newArr
  }

  // 页面刷新的时候可以定位到 菜单 显示
  useEffect(() => {
    let { pathname } = location
    setSelectedKeys([pathname])
    setOpenKeys(getOpenKeys(pathname))
  }, [])

  const navigate = useNavigate()
  // 退出
  const logout = () => {
    removeToken()
    localStorage.removeItem('user')
    navigate('/');
  }

  return (
    <Layout className="layout_sider_con">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          onClick={({ key }) => setSelectedKeys([key])}
          onOpenChange={onOpenChange}
        >
          {routes && routes.map((item) => renderSubMenu(item))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div className="app_rightBox_header_right" style={{ padding: 0 }}>
            <p style={{ marginRight: '10px' }}>qqq</p>
            <Button
              onClick={logout}
              type="primary"
              icon={<PoweroffOutlined />}
              size="small"
            ></Button>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Routes>
            {/* {RouteData(routes)} */}
            {routeRender}
          </Routes>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default AppSider
