import React from 'react'
import styled from 'styled-components';
import { LinkedIn, Twitter, Github } from './shared';


const Div = styled.div`
  text-align: center;
  width: 100%;
  display: table;
  padding-top: 15px;
`

export default () => (
  <Div>
    <Twitter />
    <Github />
    <LinkedIn />
  </Div>
)