import React from 'react';
import styled from 'styled-components';
import { Root, Routes } from 'react-static';
import Nav from './components/Nav';
import Footer from './components/Footer';

import './app.css';

const Body = styled.div`
  margin: 0px auto;
  padding-top: 0px;
  width:78%;
  position: relative;
  display: table-cell;
  @media (max-width:480px) {
    display: block;
    width: 100%;
  }
`

const Main = styled.div`
  display: table;
  width: 100%;
  height: 100%;
  @media (max-width:480px) {
    display: inherit;
    width: 100%;
  }
`

function App() {
  return (
    <Root>
      <Main>
        <Nav />
        <Body>
          <Routes />
        </Body>
      </Main>
      <Footer />
    </Root>
  )
}

export default App
