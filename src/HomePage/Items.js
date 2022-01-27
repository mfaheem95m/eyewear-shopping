
import React from "react"
import "./DisplayItems.css"
import {navigate} from "@reach/router";
import Header from "./Header"
import myContext from "../Context"
import LoginHoc from '../loginHoc'

class DisplayItems extends React.Component{
  constructor(props){
    super(props)
   this.state ={

     value : "",
     updatedList:[],

   }
   this.onChange= this.onChange.bind(this)
   this.added=this.added.bind(this)



  }
  static contextType = myContext

onAdd(items){
  const{listedElement} = this.context
  let val
  listedElement.filter(item =>{
    if(item.name === items.name){
     return  val = true
    }
  })
  return val
}
  onChange(e){
    this.setState({
      value : e.target.value

    })
    }

    added(item){
      const {addCart} = this.context
     addCart(item)

  //  listedElement.map(item =>{
  //    handleClick(item.name)
  //   })


  }

  render(){
 console.log("my context", this.context)
    const {data} = this.context
    const date =data.filter(item =>{
      const  val = this.state.value
            if(item.name.toLowerCase().includes(val)){
        return true

      }else{
        return false
      }
    }
  )
 console.log("df",this.props)
if(!this.props.isLogin){
navigate("/")
}

    return(
      <>

      <header>
      <Header value = {this.state.value} onChange = {this.onChange} />
      </header>

      <div className ="gridCont">
        {date.map(item => (

        <div  className= "whole">
          <div className = "gridItem">

         <div>
          <img className = "image" src = {item.image} alt = "glasses"/>
     </div>
     <div>
<h5>{item.name}</h5>
<br/>
<h6 className ="location">{item.brand}</h6>
<br/>
<h3>${item.price}</h3>
<br/>
</div>
 </div>

<div class = "byt">
<button className = "basket"  onClick = {() => this.added(item)}>

{
 this.onAdd(item) === true ?
  <h4>Added </h4> :
 <h4> Add to basket</h4>
}




</button>
  </div>

           </div>
        ))}
      </div>

      </>
    )
  }
}

export default LoginHoc(DisplayItems)
