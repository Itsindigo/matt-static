import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  height: 75px;
  /* width: 75px; */
`

const TechnologyIcon = (props) => {
  const {
    skill
  } = props;

  return <Img src={skill.icon} alt={skill.alt} title={skill.title} />

}

export default TechnologyIcon;