// eslint-disable-next-line no-unused-vars
import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import BaseLayout from '@/layout'
import HomePage from '@/pages'
import NotFound from '@/pages/404'

const routes = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]
const router = createBrowserRouter(routes)
export default router
