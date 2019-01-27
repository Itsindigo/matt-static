import React from 'react'
import styled from 'styled-components';
import profilePhoto from '../assets/profile-photo.png';
import { Emoji, HostmakerLink } from './shared';

const Img = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50px;
`

const Span = styled.span`
  color: #ffffff;
  padding-bottom: 8px;
`

const Div = styled.div`
  padding-bottom: 8px;
`

const Name = styled.span`
  font-weight: bold;
  font-family: 'futura';
  font-size: 22px;
  margin-bottom: 15px;
`

const Component = styled.div `
  color: #ffffff;
  text-align: center;
  padding-top: 20px;
  position: relative;
`


export default () => (
  <Component>
    <Div>
      <Img src={profilePhoto} alt="profile" title="profile-photo" />
    </Div>
    <Div>
      <Name>Matt Bridges</Name>
    </Div>
    <Div>
      <Span>
        Software Engineer @ <HostmakerLink href="https://hostmaker.com/">Hostmaker</HostmakerLink>
      </Span>
    </Div>
    <Div>
      <Span>
        Otherwise Bouldering <Emoji name='boulder' />
      </Span>
    </Div>
    <Div>
      <Span>
        Else on the move.. <Emoji name='plane' />
      </Span>
    </Div>
  </Component>
)