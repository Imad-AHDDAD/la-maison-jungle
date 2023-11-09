import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

function Cart(props) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user != null) {
      setEmail(user);
    }
  }, []);

  const reset = (e) => {                                                  
    localStorage.clear() 
    props.handleReset();
  }

  async function commander(event) {
    event.preventDefault();
    
    const items = [];
    props.elements.forEach((element, index) => {
      const quantity = localStorage.getItem(element.id);
      const totalPrice = parseFloat(quantity * element.price).toFixed(2);
      const item = {
        name: element.name,
        price: element.price,
        quantity: quantity,
        totalPrice: totalPrice,
      };
      items.push(item);
    });

    const totalOrder = parseFloat(localStorage.getItem("total")).toFixed(2)

    const data =  {
      userId : email,
      items : items,
      totalPrice : totalOrder
    }

    try {
      await axios.post("http://localhost:5000/order/saveOrder", data).then(
        (res) => {
          console.log("success : " + res);
          toast.success("order saved successfully");
          reset()
        },
        (fail) => {
          console.error("error : " + fail);
          toast.error("error saving order !")
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="cart">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <h1 className="cart-header">Panier</h1>
      <div className="cart-elements">
        {props.elements ? (
          <>
            <table>
              <tr>
                <th>Designation</th>
                <th>Prix</th>
                <th>Qté</th>
                <th>Total</th>
              </tr>
              {props.elements.map((element, index) => (
                <tr key={element.id + index}>
                  <td>{element.name}</td>
                  <td>{element.price} $</td>
                  <td>{localStorage.getItem(element.id)}</td>
                  <td>
                    {parseFloat(
                      localStorage.getItem(element.id) * element.price
                    ).toFixed(2)}
                  </td>
                </tr>
              ))}
            </table>
          </>
        ) : (
          <></>
        )}
      </div>
      {localStorage.getItem("total") && props.elements ? (
        <>
          <h2 className="total">
            Total: {parseFloat(localStorage.getItem("total")).toFixed(2)} $
          </h2>
          <button type="submit" className="command_btn" onClick={commander}>
            Order
          </button>
        </>
      ) : (
        <h2 className="total">Total: 0 $</h2>
      )}
    </div>
  );
}

export default Cart;
