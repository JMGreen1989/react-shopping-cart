import React from 'react'

class PopUp extends React.Component {
  //edit size, color and quanity
  state = {
    size: "",
    color: "",
    qty: ""
  }

  render(){

    const {size, qty, price, color, image, id} = this.props.current;

    const vis = this.props.PopUp ? "visable" : ""

    console.log(this.props.current, "current")
    // console.log("state", this.state)
    return(
      <div className = {`box ${vis}`}>
        <div className = "smallerbox">

         <div>
            <div className="size"><input type="text" value ={size} onChange= {(e)=> {this.props.handleChange("size", e)}}/></div>
            <div className="Qty"><input type="text" value ={qty} onChange= {(e)=> {this.props.handleChange("qty", e)}}/></div>
            <div className="price"><input type="text" value ={price} onChange= {(e)=> {this.props.handleChange("price", e)}}/></div>
            <div className="color"><input type="text" value ={color} onChange= {(e)=> {this.props.handleChange("color", e)}}/></div>
            <div className="image">Image{<img src = {image}/>}</div>
         </div>

          <div onClick = {() => this.props.editButton(this.props.current)} className = "otherbutton">
            edit
          </div>
        </div>
      </div>

      )
  }

}

export default PopUp;
