import React, { Fragment } from 'react'
import styled from 'styled-components';
import Profile from './Profile';

const Nav = styled.nav`
  display: table-cell;
  width: 22%;
  background: hsl(229, 31%, 11%) repeat-y 50% 0;
  height: 100%;
  border-right: 3px solid rgb(228, 212, 72);
  position: fixed;
  @media (max-width:480px) {
    display: block;
    width: 100%;
    position: relative;
    border-bottom: 3px solid rgb(228, 212, 72);
    padding-bottom: 10px;
  }
`

export default () => (
  <Fragment>
    <Nav>
      <Profile />
    </Nav>
  </Fragment>
)

