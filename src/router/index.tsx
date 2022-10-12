import React from 'react'
import { Route } from 'react-router-dom'
import { routes, IRoute } from './routes'

export const RouteData = (data: any[]) => {
  return data.map((item: IRoute, index: number) => {
    return (
      <Route
        key={item?.key ? item?.key : index}
        path={item?.path}
        element={item?.element}
        caseSensitive={item?.caseSensitive}
      >
        {/* {item?.children ? RouteData(item?.children) : null} */}
        {item?.children &&
          item?.children?.map((child: any) => {
            return (
              <Route
                key={child?.key ? item?.key : item?.path}
                path={child?.path}
                element={child?.element}
                caseSensitive={item?.caseSensitive}
              />
            )
          })}
      </Route>
    )
  })
}

export const routeRender = RouteData(routes)
