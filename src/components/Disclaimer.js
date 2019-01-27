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

const Component = styled.div `
  color: #ffffff;
  position:fixed;
  left: 1%;
  bottom:0px;
  width: 18%;
  padding-bottom: 30px;
`


export default () => (
  <Component>
    <Div>
      <Disclaimer>Disclaimer:</Disclaimer> <DisclaimerMessage>Not a CSS guy - please do ignore the great many faux pas I may have made in the styling of this page</DisclaimerMessage>
    </Div>
  </Component>
)