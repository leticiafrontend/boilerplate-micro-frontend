import React, { Suspense, lazy } from 'react'
import logo from './logo.svg'
import './App.css'

const ContentApp = lazy(() => import('content/App'))

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi from Shell App</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Suspense fallback="Loading...">
            <ContentApp />
          </Suspense>
        </header>
      </div>
    </>
  )
}

export default App
