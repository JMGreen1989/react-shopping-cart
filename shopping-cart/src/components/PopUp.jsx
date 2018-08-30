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
            <div className="size"><input type="text" value ={size}/></div>
            <div className="Qty"><input type="text" value ={qty}/></div>
            <div className="price"><input type="text" value ={price} onChange= {(e)=> {this.props.handleChange("price", e)}}/></div>
            <div className="color"><input type="text" value ={color}/></div>
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
