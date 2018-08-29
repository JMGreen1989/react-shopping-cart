import React from 'react'
import ShoppingItem from './ShoppingItem'

function ShoppingCart(props) {
  console.log(props)

  const list = props.clothing.map(clothingthings => <ShoppingItem {...clothingthings} editButton = {props.editButton}/>)
  console.log(list)
    return(
    <section>
      <div>
        <span className= "itemplacement">Items</span>
        <span className= "sizeplacement"> Size </span>
        <span className= "qtyplacement"> Qty </span>
        <span className= "priceplacement"> Price </span>
      </div>

     {list}
    </section>

  )

}

export default ShoppingCart;
