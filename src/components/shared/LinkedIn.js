import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '../../assets/icons/linkedin.png'

const Img = styled.img`
  height: ${props => props.height};
  width: ${props => props.width};
`

const Div = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 20px;
`

export default ({ height = '40px', width = '40px' }) => (
  <Div>
    <a href="https://www.linkedin.com/in/matthew-bridges/"  alt="LinkedIn" title="L:inkedIn">
      <Img src={LinkedInIcon} alt="Github" title="LinkedIn" height={height} width={width} />
    </a>
  </Div>
)