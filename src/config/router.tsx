import * as S from './styles'

import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ReactNode } from 'react'

// PAGES
//import Home from '@/pages/home'
import Login from '@/pages/login/Login'
import Dashboard from '@/pages/dashboard/Dashboard'
import { Spinner } from '@/components/ui'
import Sidebar from '@/components/sidebar'
import TopBar from '@/components/topbar'
import Users from '@/pages/users'

type LayoutProps = {
	children: ReactNode
}

function Layout({ children }: LayoutProps) {

	return (
		<div>
			<S.Body>
			<S.ContainerLeft>
				<Sidebar/>
			</S.ContainerLeft>
			<S.ContainerRight>
				<TopBar></TopBar>
				<S.ContainerContent>
				<div>{children}</div>
				</S.ContainerContent>
			</S.ContainerRight>
			</S.Body>
		</div>
	)
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    )
  },
  {
    path: '/users',
    element: (
      <Layout>
        <Users />
      </Layout>
    )
  },
  {
    path: '/plans',
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    )
  },
  {
    path: 'payments',
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    )
  },
  {
    path: '/specialties',
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    )
  },
  {
    path: '/notifications',
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    )
  },
  {
    path: '/faq',
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    )
  }
])

export default function Router() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
