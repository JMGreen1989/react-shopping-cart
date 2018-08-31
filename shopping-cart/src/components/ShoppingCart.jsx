import React from 'react'
import ShoppingItem from './ShoppingItem'

function ShoppingCart(props) {
  console.log(props)

  const list = props.clothing.map(clothingthings => <ShoppingItem {...clothingthings} editButton = {props.editButton}

   deleteButton = {props.deleteButton}
   saveButton = {props.saveButton} />)
    console.log(list)

    return(

    <section>
      <div className = "itemwords">
        <div className= "itemplacement">{props.clothing.length} Items</div>

        <div className="itemwordz">
          <div className= "sizeplacement"> Size  </div>
          <div className= "qtyplacement"> Qty  </div>
          <div className= "priceplacement"> Price  </div>
        </div>
      </div>

     {list}
    </section>

  )

}

export default ShoppingCart;
