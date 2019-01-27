import React from 'react';
import styled from 'styled-components';
import TwitterIcon from '../../assets/icons/twitter.png'

const Img = styled.img`
  height: ${props => props.height};
  width: ${props => props.width};
`

const Div = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 20px;
`

export default ({ height = '20px', width = '20px' }) => (
  <Div>
    <a href="https://twitter.com/EatsIndigo"  alt="Twitter" title="Twitter">
      <Img src={TwitterIcon} alt="Twitter" title="Twitter" height={height} width={width} />
    </a>
  </Div>
)