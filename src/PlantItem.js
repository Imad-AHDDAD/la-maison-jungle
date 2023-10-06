import React from 'react'

function PlantItem(props) {

  const handleAddClick = (e) => {
    var cartElements = JSON.parse(localStorage.getItem('cartElements')) || [];
    cartElements.push(props.produit);
    localStorage.setItem('cartElements', JSON.stringify(cartElements));
    localStorage.setItem('total', Number(localStorage.getItem('total'))+Number(props.produit.price))
    props.handle();
  }

  return (
    <>
    <div className='plantItem'>
        <div className='image' >
            <img alt='product' src={props.produit.cover} />
        </div>
        <div className='description'>
            <h3>{props.produit.name}</h3>
            <h4>category : {props.produit.category}</h4>
            <h4>price : {props.produit.price} $</h4>
            <button onClick={handleAddClick}>Ajouter</button>
        </div>
    </div>
    </>
  )
}

export default PlantItem