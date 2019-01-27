import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import TechnologiesData from './data';
import TechnologyIcon from './TechnologyIcon';
import { chunk } from '../../utils'

const Row = styled.div`
  width: 100%;
  text-align: center;
`

const Column = styled.div`
  display: inline-block;
  padding-right: 60px;
`

class ListTechnologies extends Component {
  
  getTechnologies = (type, count) => {
    const rows = chunk(TechnologiesData[type], count);
    return rows.map((row) => (
      <Row>
        {row.map(value => (
          <Column key={value.name}>
            <TechnologyIcon skill={value} />
          </Column>
        ))}
      </Row>
    ))
  }

  render() {
    return (
      <Fragment>
        {this.getTechnologies('language', 3)}
        {this.getTechnologies('framework', 4)}
        {this.getTechnologies('tool', 3)}
        {this.getTechnologies('software', 3)}
      </Fragment>
    )
  }
}


export default ListTechnologies;