import React from 'react'

import "./BasketItem.css"
import Header from "./Header"
import "./Basket.css"
import myContext from "../Context"
import Baskets from "./Basket"
import { navigate } from "@reach/router"
class Cart extends React.Component {

   static contextType = myContext



  render(){
    const {listedElement,onClear,isLogin} = this.context
    const price = listedElement.reduce((a,c)=> a + (c.price * c.quantity) , 0)
   if(!isLogin){
    navigate("/")
   }
    return (

      <>
      <header>
      <Header/>
      </header>
      <div className ="headernot">
      <div class = "heading">

<div>
 <br/>
 <br/>
 <h2 className ="first"> My Basket </h2>
</div>
<div class = "butting">
 <br/><br/>
 <button className = "close"> Close </button>
 <button className = "clearing" onClick ={onClear}> clear basket </button>
</div>
</div>
  <div>
    <Baskets/>
    </div>
      <footer>
<hr/>
        <div class = "footering">

         <div>
          <br/>
          <br/>
          <h5> Subtotal Amout: </h5>
          <br/>
          <h1> ${price} </h1>
          <br/>
        </div>
        <div>
          <br/><br/><br/>
          <button className = "checking"> CHECKOUT </button>
        </div>
        </div>

      </footer>

    </div>
    </>
  )
  }

}
export default Cart
