import React, { Component } from 'react';
import './App.css';
import Checkout from "./components/Checkout";
import ShoppingCart from "./components/ShoppingCart";
import ShoppingItem from "./components/ShoppingItem"
import PopUp from "./components/PopUp"

class App extends Component {

   state ={

    current: {},

    PopUp: false,

    clothing: [

    {
      id: 0,
      title: "Shirt",
      color: "Teal",
      style: "Polo",
      price:  9.99,
      size:  "M",
      qty:    1 ,
      image: "https://images-na.ssl-images-amazon.com/images/I/91MR26Sa4zL._UL1500_.jpg"
    },

    {
      id: 1,
      title: "Pants",
      color: "Blue",
      style: "Jeans",
      price:  12.99,
      size:  "M",
      qty:    1 ,
      image: "https://huckberry.imgix.net/spree/products/343015/original/UVBOufmXpR_flint-and-tinder_mill_pant_0_original.jpg?auto=compress%2Cformat&dpr=1&cs=tinysrgb&crop=top&fit=clip&w=300&h=300"
    },

    {
      id: 2,
      title: "Jacket",
      color: "Brown",
      style: "Bomber",
      price:  39.99,
      size:  "M",
      qty:    1 ,
      image: "https://cdn.shopify.com/s/files/1/2604/4866/products/womens-b3-bomber-jacket-brown-cockpit-usa-w72n100_1_740x.jpg?v=1519308568"
    }

    ]
  };

   editButton = (props) => {
    this.setState({PopUp: !this.state.PopUp});
    !this.state.PopUp ? this.setState({current: props}) :

    this.setState({
    clothing: this.saveCurrent(this.state.clothing, this.state.current)
     })

     console.log(this.state)
    };


   deleteButton = (props) => {
    this.setState({delete: props}, () => {
    const newClothing = [...this.state.clothing]
    const filterClothing = newClothing.filter(
    (id) => id.id !== props.id )
    console.log(props.id, "props baby")
    console.log(filterClothing, "text or something")

    this.setState({
    clothing: filterClothing
    })
    });

    };


   saveButton  = () => {


    };


   handleChange = (key, e) =>  {

   // console.log(key, e)
    this.setState({

        current: {
          ...this.state.current,
          [key]: e.target.value}

  })};


  saveCurrent = (arr, current ) => {
    const newArr = [...arr]
    newArr[current.id] = current
    // console.log(newArr, "LOOK HERE")
    return newArr
  };



  render() {
    // console.log(this.state, "here's the state")
    return (
      <div>
      <ShoppingCart clothing = {this.state.clothing} editButton={this.editButton} deleteButton={this.deleteButton} saveButton={this.saveButton}/>
      <PopUp PopUp = {this.state.PopUp} editButton={this.editButton} current={this.state.current} handleChange={this.handleChange}  />
      <Checkout checkout = {this.state.clothing} />
      </div>

    );
  }
}

export default App;
