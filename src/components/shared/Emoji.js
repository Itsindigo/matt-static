import React from 'react';

const emojis = {
  plane: { character: '✈️', label: 'plane'},
  boulder: {character: '🧗‍♂️', label: 'boulder'},
  joy: {character: '😂', label: 'joy' }
}

const Emoji = (props) => (
  <span role="img" aria-label={emojis[props.name].label}>{emojis[props.name].character}</span>
)


export default Emoji;