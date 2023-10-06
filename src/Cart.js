import React from "react"

function Cart(props) {

  return (
    <div className='cart'>
      <h1 className='cart-header'>Panier</h1>
      <ul className='cart-elements'>
        {
          props.elements ?
          <>
          <table>
            <tr>
              <th>Designation</th>
              <th>Prix</th>
              <th>Qté</th>
            </tr>
            {props.elements.map((element, index) =>
            (
              <tr key={element.id + index}>
                <td>{element.name}</td>
                <td>{element.price} $</td>
                <td>{localStorage.getItem(element.id)}</td>
              </tr>
              // <li key={element.id + index}> ■ {element.name} - {element.price} $</li>
            ))}
          
          </table>
          </>
          :
          <></>
        }
      </ul>
      {
        localStorage.getItem('total') && props.elements ?
        (<h2 className="total">Total: {localStorage.getItem('total')} $</h2>)
        :
        (<h2 className="total">Total: 0 $</h2>)
      }
    </div>
  )
}

export default Cart