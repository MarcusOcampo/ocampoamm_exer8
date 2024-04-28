import React from 'react'
import "./cardProduct.css"

const CardProduct = (content) => {
    const name = content.name;
    const imgLink = content.imgLink;
    // const id = content.id;

  return (
    // create the body inside a card
    <div className="card">
        <h1 className="cardName">{name}</h1>
        <img className="cardPhoto" src={imgLink} alt={name}></img>
        {/* <p>id:{id}</p> */}
        <button className="cardButton" onClick={() => console.log(`Successfully added ${name} to cart.`)}>BUY NOW</button> 
    </div>
  )
}

export default CardProduct