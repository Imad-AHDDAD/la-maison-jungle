import React from "react"

function Cart(props) {

  return (
    <div className='cart'>
      <h1 className='cart-header'>Panier</h1>
      <div className='cart-elements'>
        {
          props.elements ?
          <>
          <table>
            <tr>
              <th>Designation</th>
              <th>Prix</th>
              <th>Qté</th>
              <th>Total</th>
            </tr>
            {props.elements.map((element, index) =>
            (
              <tr key={element.id + index}>
                <td>{element.name}</td>
                <td>{element.price} $</td>
                <td>{localStorage.getItem(element.id)}</td>
                <td>{parseFloat(localStorage.getItem(element.id)*element.price).toFixed(2)}</td>
              </tr>
            ))}
          
          </table>
          </>
          :
          <></>
        }
      </div>
      {
        localStorage.getItem('total') && props.elements ?
        (<h2 className="total">Total: {parseFloat(localStorage.getItem('total')).toFixed(2)} $</h2>)
        :
        (<h2 className="total">Total: 0 $</h2>)
      }
    </div>
  )
}

export default Cart