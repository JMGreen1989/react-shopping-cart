import React from 'react'


function Checkout(props) {


let total = 0;
props.checkout.forEach(cloth =>{
 total += (cloth.price * cloth.qty)
})

  return(
    <div className = "checkoutbox">
       <div className = "checkout">Checkout {Number((total).toFixed(2))}</div>
    </div>
  )
}

export default Checkout;
