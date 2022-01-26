import React from "react"
import "./BasketItem.css"

import "./Basket.css"
import myContext from "../Context"
import { MdCancelPresentation} from 'react-icons/md';
class Baskets extends React.Component{

  static contextType = myContext



render(){
  const {listedElement,deleteCartItem,onIncrement,onDecrement} = this.context



  return(

    <div>

  {listedElement.map(item => (

    <div className = "item">
    <div className = "amount">

     <button className = "buttonn" onClick = { ()=> onIncrement(item.name)

      } > + </button>
     <br/>
     <button className= "buttond" onClick = {()=> onDecrement(item.name)

       }> - </button>

    </div>
    <div className= "pic">
      <div>
<img className = "imageUse" src = {item.image} alt ="glasses"
  />
      </div>


    </div>

    <div className = "quantity">
    <br/>
    <h5 className ="spec"> {item.name}</h5>
    <br/>
    <h6 className= "special"> Quantity </h6>
    <h6>{item.quantity}</h6>

    </div>
    <div className = "size">
    <br/>
    <br/><br/>
    <h5 className = "special"> size </h5>

    <h6> 28 mm</h6>

    </div>
    <div className = "color">
    <br/>
    <br/><br/>
    <h5 className = "special">color</h5>
    <div className = "color1"></div>

    </div>
    <div className = "price">
      <br/><br/>
    <h1> ${item.price * item.quantity}</h1>

    </div>
    <div className = "cancel">
    <br/><br/>
    <button className= "cancelButton"onClick = {() => deleteCartItem(item.name)}><MdCancelPresentation/></button>

    </div>


  </div>
  ))}


        </div>

  )
}
}
export default Baskets
