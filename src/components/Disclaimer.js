import React from 'react'
import styled from 'styled-components';
import { Emoji } from '../components/shared';

const Div = styled.div`
  text-align: left;
  @media (max-width:480px) {
    padding-top: 8px;
  }
`

const Disclaimer = styled.span`
  font-size: 12px;
  font-weight: bold;
`

const DisclaimerMessage = styled.span`
  font-style: italic;
  font-size: 12px;
`

export default () => (
  <Div>
    <Disclaimer>Disclaimer: </Disclaimer> 
    <div>
      <DisclaimerMessage>Not a CSS guy - please do ignore the great many sins I may have committed in the styling of this page </DisclaimerMessage>
      <Emoji name='joy' />
    </div>
  </Div>
)