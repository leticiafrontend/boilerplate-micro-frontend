import React, { Suspense, lazy } from 'react'
import Theme from './themes'

const ContentApp = lazy(() => import('content/App'))

const App = () => {
  return (
    <Theme>
      <div>
        <h1>Hi from Shell App</h1>
        <Suspense fallback="Loading...">
          <ContentApp />
        </Suspense>
      </div>
    </Theme>
  )
}

export default App
