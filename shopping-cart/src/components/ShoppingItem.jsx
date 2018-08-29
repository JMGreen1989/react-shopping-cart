import React from 'react'


function ShoppingItem(props) {

  return(
    <section className="Items">
      <div className="image"><img src={props.image}/></div>
        <div className="info">
           <p> Item {props.title}</p>
           <p> Style {props.style}</p>
           <p> Color {props.color}</p>

        <div>
          <span onClick = {() => props.editButton()}> EDIT  </span>
          <span>  X REMOVE </span>
          <span> SAVE FOR LATER </span>
        </div>

      </div>

      <div className="purchase">
        <div className="size">{props.size}</div>
        <div className="Qty">{props.qty}</div>
        <div className="price">{props.price}</div>
      </div>

    </section>

    )

}

export default ShoppingItem;
