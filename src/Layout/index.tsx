import React from 'react'
import { Routes, Outlet } from 'react-router-dom'
import { routeRender } from '../router'
// import { routes } from '../router/routes'

class Layout extends React.Component {
  render(): React.ReactNode {
    console.log(routeRender)
    return (
      <div id="layout">
        <Routes>
          {/* {RouteData(routes)} */}
          {routeRender}
        </Routes>
        <Outlet />
      </div>
    )
  }
}

export default Layout
