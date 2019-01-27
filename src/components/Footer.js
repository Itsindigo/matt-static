import React from 'react';
import styled from 'styled-components';
import Disclaimer from './Disclaimer';
import SocialLinks from './SocialLinks';

const Component = styled.div `
  color: #ffffff;
  position:fixed;
  left: 1%;
  bottom:0px;
  width: 18%;
  padding-bottom: 12px;
`

export default () => (
  <Component>
    <Disclaimer />
    <SocialLinks />
  </Component>
)