import React, { Component } from 'react';
import './App.css';
import Checkout from "./components/Checkout";
import ShoppingCart from "./components/ShoppingCart";
import ShoppingItem from "./components/ShoppingItem"

class App extends Component {

   state ={
    clothing: [

    {
      title: "Shirt",
      color: "Teal",
      style: "Polo",
      price: "$9.99",
      size:  "M",
      qty:   "1",
      image: "https://images-na.ssl-images-amazon.com/images/I/91MR26Sa4zL._UL1500_.jpg"
    },

    {
      title: "bbb",
      color: "bbb",
      style: "bbb",
      price: "bbb",
      size:  "bbb",
      qty:   "bbb",
      image: "https://huckberry.imgix.net/spree/products/343015/original/UVBOufmXpR_flint-and-tinder_mill_pant_0_original.jpg?auto=compress%2Cformat&dpr=1&cs=tinysrgb&crop=top&fit=clip&w=300&h=300"
    },

    {
      title: "ccc",
      color: "ccc",
      style: "ccc",
      price: "ccc",
      size:  "ccc",
      qty:   "ccc",
      image: "https://cdn.shopify.com/s/files/1/2604/4866/products/womens-b3-bomber-jacket-brown-cockpit-usa-w72n100_1_740x.jpg?v=1519308568"
    }

    ]
  };

   editButton = () => {console.log("edittest")}
   deleteButton = () => {console.log("deletetest")}
   saveButton  = () => {console.log("savetest")}

  render() {
    return (
      <div>test
      <ShoppingCart clothing = {this.state.clothing} editButton={this.editButton}/>
      </div>
    );
  }
}

export default App;
