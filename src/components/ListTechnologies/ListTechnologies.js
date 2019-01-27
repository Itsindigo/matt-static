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
  padding-right: 100px;
`

class ListTechnologies extends Component {
  getTechnologies = () => {
    const rows = chunk(TechnologiesData, 3);
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
        {this.getTechnologies()}
      </Fragment>
    )
  }
}


export default ListTechnologies;