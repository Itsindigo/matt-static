import React from 'react';
import styled from 'styled-components';
import { Root, Routes } from 'react-static';

import Nav from './components/Nav';

import './app.css';

const Main = styled.div`
  margin: 0px auto;
  padding-top: 0px;
  width:78%;
  position: relative;
  display: table-cell;
`

function App() {
  return (
    <Root>
      <div className="main">
        <Nav />
        <Main>
          <Routes />
        </Main>
      </div>
    </Root>
  )
}

export default App
