import React, { Fragment } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  height: 45px;
`

const TechnologyIcon = (props) => {
  const {
    skill
  } = props;

  return (
    <Fragment>
      <Img src={skill.icon} alt={skill.name} title={skill.name} />
      <p>{skill.name}</p>
    </Fragment>
  )

}

export default TechnologyIcon;