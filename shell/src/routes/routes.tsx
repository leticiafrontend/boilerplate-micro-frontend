import { lazy } from 'react'

const HomePage = lazy(() =>
  import('../pages/HomePage').then(({ HomePage }) => ({ default: HomePage }))
)
const ContentPage = lazy(() => import('content/App'))

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true
  },
  {
    path: '/content',
    component: ContentPage,
    exact: true
  }
]

export default routes
