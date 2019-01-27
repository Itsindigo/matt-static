import React, { Fragment } from 'react'
import styled from 'styled-components';
import Profile from './Profile';
import Footer from './Footer';


const Nav = styled.nav`
  display: table-cell;
  width: 22%;
  background: hsl(229, 31%, 11%) repeat-y 50% 0;
  height: 100%;
  border-right: 3px solid rgb(228, 212, 72);
  position: fixed;
`

export default () => (
  <Fragment>
    <Nav>
      <Profile />
      <Footer />
    </Nav>
  </Fragment>
)

