import React from 'react';
import Card from './Card';

const Cards = ({ robots }) => (
  <div>
    {robots.map(({ id, name, email }, idx) => (
      <Card key={`card-${id}`} id={id} name={name} email={email} />
    ))}
  </div>
);

export default Cards;
