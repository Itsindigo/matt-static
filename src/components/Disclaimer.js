import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
  text-align: left;
`

const Disclaimer = styled.span`
  font-size: 16px;
  font-weight: bold;
`

const DisclaimerMessage = styled.span`
  font-style: italic;
  font-size: 12px;
`

export default () => (
  <Div>
    <Disclaimer>Disclaimer:</Disclaimer> <DisclaimerMessage>Not a CSS guy - please do ignore the great many faux pas I may have made in the styling of this page</DisclaimerMessage>
  </Div>
)