import React from 'react'

class PopUp extends React.Component {
  //edit size, color and quanity
  state = {
    size: "",
    color: "",
    qty: ""
  }

  render(){
    const vis = this.props.PopUp ? "visable" : ""

    return(
      <div className = {`box ${vis}`}>
        <div className = "smallerbox">
          <div onClick = {() => this.props.editButton()} className = "otherbutton">
            edit
          </div>
        </div>
      </div>

      )
  }

}

export default PopUp;
