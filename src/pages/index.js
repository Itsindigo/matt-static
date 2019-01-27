import React from 'react';
import { withSiteData } from 'react-static';
import { Section } from '../components/shared';
import ListTechnologies from '../components/ListTechnologies/ListTechnologies';

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
      <div>
        <p>
          I've been writing code since August 2015, here are some of the technologies i've used in that time...
        </p>
        <div>
          <ListTechnologies />
        </div>
      </div>
    </Section>
    <Section>
      <h1>
        Interest
      </h1>
    </Section>
  </div>
))
