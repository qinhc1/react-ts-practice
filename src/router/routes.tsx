import React from 'react'
import { ReactNode, Suspense } from 'react'
const Home = React.lazy(() => import('@/pages/Home'))
const Childrenpages = React.lazy(() => import('@/pages/Childrenpages'))
const Graph = React.lazy(() => import('@/pages/Graph'))

export interface IRoute {
  caseSensitive?: boolean
  children?: Array<IRoute>
  element?: React.ReactNode | null
  index?: false
  path: string
  key?: any
  title?: string
  [name: string]: any
}

// 避免第一次加载闪屏
const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<>loading</>}>{children}</Suspense>
}
export const routes: Array<IRoute> = [
  {
    path: '/first',
    name: 'home',
    children: [
      {
        path: '/first/home',
        name: 'home',
        element: lazyLoad(<Home />),
      },
      {
        path: '/first/childrenpages',
        name: 'childrenpages',
        element: lazyLoad(<Childrenpages />),
      },
    ],
  },
  {
    path: '/sec',
    name: 'graph',
    children: [
      {
        path: '/sec/graph',
        name: 'graph',
        element: lazyLoad(<Graph />),
      },
    ],
  },
]
