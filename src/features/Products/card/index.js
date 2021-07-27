import React from 'react';

const Card = ({card}) => {
  return (
    <section className="card">
      <section className="card-product">Product: <strong>{card.product}</strong></section>
      <section className="card-price">Price: <strong>{card.price}</strong></section>
      <section className="card-quantity">Quantity: <strong>{card.quantity}</strong></section>
      <section className="card-type">Type: <strong>{card.type}</strong></section>
      <section className="card-origin">Origin: <strong>{card.origin}</strong></section>
      <section className="card-industry">Industry: <strong>{card.industry}</strong></section>
    </section>
  )
}

export default Card;