import React from 'react';
import styled from 'styled-components';
import { withSiteData } from 'react-static';
import { Section, HostmakerLink } from '../components/shared';
import ListTechnologies from '../components/ListTechnologies/ListTechnologies';

const Column = styled.div`
  display: inline-block;
  width: 50%;
  vertical-align: top;
`
const Row = styled.div`
  width: 100%;
`

export default withSiteData(() => (
  <div style={{ textAlign: 'left', paddingLeft: '10px' }}>
    <Section>
      <h1>
        About (.. a tinder bio of sorts ..)
      </h1>
      <div>
        <p>
          Northern boy biding his time and learning his craft in London. Remaining open to all ideas and opportunities in the hope that sooner or later a grand plan emerges - 
          but right now would probably be best described as ... busy.
        </p>
        <p>
          Interests professionally in the tech industry, disruption / emerging technologies, silicon valley, and the startup scene at large. At the moment particularly attentive to 
          innovations across E-sports, Direct to Consumer businesses, Decentralised Markets and Brain-Computer interfaces.
        </p>
        <p>
          Like most people in their mid-twenties (that I know), I'm transitioning to a phase where partying takes a smaller slice of the pie (relatively, of course.), and what figuring out where I now wish to spend my time.
          So far that's included lots of outdoorsy-type-things, figuring out how the heck you inject character into a new build flat in London, and endlessly trawling for travel-hacks.
          I'm also working on my U.G.B.T (Unified Grand Bagel Theory), but that's still W.I.P.
        </p>
      </div>
    </Section>
    <Section>
      <h1>
        Experience
      </h1>
      <Row>
        <Column>
          <ListTechnologies />
        </Column>
        <Column>
          <p>
            I've been programming since August 2015, <a href="https://makers.tech/" alt="makers" title="Makers">Makers</a> software development bootcamp is where I got started, and I haven't looked back since.
          </p>
          <p>
            Philosophically driven to write clean code, rapidly iterating through tools and technologies to develop the widest base of experience I can. At the moment particularly 
            interested in decoupling applications with queues and other messaging systems, and I'm itching to build applications with some sort of event-bus such
            as <a href="https://kafka.apache.org/" alt="kafka" title="Kafka">Kafka</a> or <a href="https://www.rabbitmq.com/" alt="RabbitMQ" title="Rabbit MQ">RabbitMQ</a>. 
          </p>
          <p>
            Professionally I've worked across a variety of projects, from CMS systems for digital publications, to single page apps for vehicle auctioning software, and portals for online banking.
          </p>
          <p>
            Currently hacking at Hostmaker, a series-B funded home rental management company. We're leveraging the home-sharing market to offer better options for home-owners and institutional investors alike.
          </p>
          <p>
            If you work in Tech or Product and might be interested in making a move, you should <HostmakerLink href="https://hostmaker.com/gb/careers/" alt="Hostmaker Careers" title="Hostmaker Careers">totally check us out</HostmakerLink>.
            The engineering culture is strong, there is transparency across the business and salaries, and we have a distributed team all over Europe.
          </p>
        </Column>
      </Row>
    </Section>
    <Section>
      <h1>
        Interest
      </h1>
      <p />
    </Section>
  </div>
))
