import React from "react"
import './App.css';
import DisplayItems from "./HomePage/Items"
import { Router ,Redirect} from "@reach/router";
import SignUp from "./CreateAccount/SignUp"
import Login from "./CreateAccount/Login"
import Cart from "./HomePage/BasketLayout"
import myContext,{Provider} from "./Context"
import data from "./Data"


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLogin: false,
      data : data,
      cartItems :[],
      userDetail : [],
  // name : "",
      // email: "",
      // password:"",
    }


    this.addCart = this.addCart.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.onClear=this.onClear.bind(this)
    this.onIncrement =this.onIncrement.bind(this)
    this.onDecrement=this.onDecrement.bind(this)
    this.setLogin=this.setLogin.bind(this)

  }

  static contextType = myContext
onIncrement(name){
 const update = this.state.cartItems.filter(item => {
    if(item.name === name ){
    item.quantity =  item.quantity + 1
    return item
    }else{
      return item
    }
  })
  this.setState({cartItems:update })
}
onDecrement(name){
 const update = this.state.cartItems.map(item => {
    if(item.name === name && item.quantity > 1 ){
    item.quantity -= 1
    return item
    }else{
      return item
    }
  })
  this.setState({cartItems:update })
}
    onClear(){

      this.setState({
        cartItems : []
      })
    }
  addCart(item){
    // const updated= this.state.data.filter(item =>   item.name === name)
    // const listedElement = [...this.state.cartItems,...updated]
    this.setState({cartItems: [...this.state.cartItems,item] })
    // this.handleClick(item.name)

  }
  // handleClick(name){

  // const update = this.state.data.map(item => {
  //     if(item.name === name ){
  //   item.click = true
  //    return item
  //     }else{
  //       return item
  //     }
  //   }
  //     )
  //  this.setState({data : update})
  // }

  deleteItem(name){
    const updated = this.state.cartItems.filter(item =>   item.name !== name
      )
    this.setState({cartItems:
updated })

  }

  setLogin(isLogin){
    this.setState({isLogin})
  }
  render(){
    console.log("this cart itemssss", this.state.cartItems)

    console.log("detail",this.state.userDetail)
    const contextState = {
      isLogin: this.state.isLogin,
      data : this.state.data,
      addCart: this.addCart,
      listedElement : this.state.cartItems,
      userDetail:this.state.userDetail,
      deleteCartItem :this.deleteItem,
      onClear : this.onClear,
    onIncrement:this.onIncrement,
    onDecrement:this.onDecrement,
    setLogin: this.setLogin


    }

console.log("context state", this.state)
 return (

    <div className="App">

      <Provider  value={contextState}>

      <Router>
        { !this.state.isLogin ?
        <Login path = "/" />
        :
        <Redirect from="/"  to="/items" noThrow/>
        }
         { !this.state.isLogin ?
        <SignUp  path = "/signup"/>
        :
        <Redirect from="/signup"  to="/items" noThrow/>
        }

       <DisplayItems path = "/items" />
       <Cart path =  "/cart" />



       </Router>
       </Provider>
    </div>
  );
  }

}

export default App;
