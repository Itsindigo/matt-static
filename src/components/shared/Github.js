import React from 'react';
import styled from 'styled-components';
import GithubIcon from '../../assets/icons/github-light.png'

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
    <a href="https://github.com/itsindigo"  alt="Github" title="Github">
      <Img src={GithubIcon} alt="Github" title="Github" height={height} width={width} />
    </a>
  </Div>
)