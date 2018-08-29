import React from 'react'


function ShoppingItem(props) {

  return(
    <section className="Items">
      <div className="image"><img src="https://images-na.ssl-images-amazon.com/images/I/91MR26Sa4zL._UL1500_.jpg"/></div>
        <div className="info">
           <p>Green Shirt</p>

           <p> Style #AAA</p>

           <p> Color: Teal</p>

        <div>
          <span> EDIT </span>
          <span> X REMOVE </span>
          <span> SAVE FOR LATER </span>

        </div>

      </div>

      <div className="purchase"> $9.99</div>
    </section>
    )



}

export default ShoppingItem;
