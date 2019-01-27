import React from 'react';
import styled from 'styled-components';
import Disclaimer from './Disclaimer';
import SocialLinks from './SocialLinks';

const Component = styled.div `
  color: #ffffff;
  position:fixed;
  bottom: 0;
  width: 18%;
  padding-bottom: 12px;
  @media (max-width:480px) {
    background: hsl(229, 31%, 11%) repeat-y 50% 0;
    border-top: 3px solid rgb(228, 212, 72);
    display: block;
    width: 100%;
    bottom: 0;
    position: relative;
  }
`

export default () => (
  <Component>
    <Disclaimer />
    <SocialLinks />
  </Component>
)