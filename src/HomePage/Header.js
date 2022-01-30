import React from "react"
import './Header.css';
import { AiOutlineFilter } from 'react-icons/ai';
import { BsBasket3 } from 'react-icons/bs';
import {Link} from '@reach/router'
import myContext from "../Context";


class Header extends React.Component {
  static contextType= myContext
  render(){
    const {value,onChange}= this.props
    const{isLogin} =this.context



    return(
      <>
      <div className = "navigation">

      <nav id = "navigate">

          <img src ="https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png" alt ="icon"/>

        <Link to="/items" className = "home">
        <button className= "buttonH">Home</button>
          </Link>
        <Link to ="/shop" className= "shop">
          <button className = "buttonH" disabled>
            Shop
          </button>

        </Link>
        <Link to = "/featured" className = "featured">
        <button className = "buttonH" disabled>Featured</button>
        </Link>
        <Link  to = "/recomended" className = "recomended">

        <button className = "buttonH" disabled>Recomended</button>
        </Link>
        <Link to = "/filter" className = "search" >
          <button className= "filter" disabled>Filter <AiOutlineFilter/></button>
          </Link>
        <input className="input" type = "text" placeholder = "search product...." value = {value} onChange= {onChange} />


        <Link className = "basket1"  to ="/cart">
          <button className = "button">
          <BsBasket3/>
          </button>
            </Link>
{
  !isLogin &&
 <>
 <Link className = "sign" to= "/signup" >
          <button className="signIn">Sign up</button>
          </Link>
          <Link className= "signin" to = "/">
          <button className ="signUp">Sign in</button>
          </Link>
</>

}

      </nav>

    </div>

</>
    )
  }
}

export default Header
