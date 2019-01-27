import React from 'react'
import { Root, Routes } from 'react-static'

import Nav from './components/Nav';

import './app.css'

function App() {
  return (
    <Root>
      <div className="main">
        <Nav />
        <div className="content">
          <Routes />
        </div>
      </div>
    </Root>
  )
}

export default App
