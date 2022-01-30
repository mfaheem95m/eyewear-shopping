import React from "react"
import "./SignUp.css"
import Header from "../HomePage/Header"
import myContext from "../Context"
import {Link,navigate} from '@reach/router'

class Login extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password:""
    }

    this.inputEmail = this.inputEmail.bind(this)
    this.inputPassword = this.inputPassword.bind(this)
    this.userLogin = this.userLogin.bind(this)

  }
  static contextType = myContext

 inputEmail(e){
  this.setState({
   email: e.target.value
  })
}
inputPassword(e){
  this.setState({
   password: e.target.value
  })
}
 userLogin(){
  console.log("called userLogin")
  const {userDetail, setLogin} = this.context
   console.log("log",userDetail)

  const isUser = userDetail.some(item =>(
    item.email === this.state.email && item.password === this.state.password
    )
   )

  setLogin(isUser)

  if(isUser){
    navigate(`/items`)
  }
}


  render(){


    return(
      <>
     <header>
        <Header/>
      </header>
      <div>


    <div className = "loginpage">
      <div className = "header">
      <h3> Sign up to Salinaka
</h3>
       </div>
      <div className = "mainDiv1">

       <div>
       <br/>
       <br/>
         <h5>* Email</h5>
         <br/>
         <input  className = "emailI" type = "email" placeholder = " test@example.com " onChange={this.inputEmail}/>

       </div>
       <div>
       <br/>
         <h5>* Password</h5>
         <br/>

         <input className = "passI"  type = "password" value ={this.state.password} onChange ={this.inputPassword} maxLength="8" />

       </div>
       <div>
         <br/>
         <h5  className= "under"> Forget password? </h5>
       </div>
       </div>
       <div  className = "maindiv3">
         <br/>
         <br/>
        <div  className= "vl"/>
        <br/>
        <h6> OR </h6>
        <br/>

        <div  className= "vl"/>
      </div>
      <div  className = "mainDiv2">
        <div>
          <br/>
          <br/>
          <button  className="facebook">
        Continue with Facebook
      </button>
        </div>
      <div>
        <br/>
      <button  className= "google">
        Continue with Google
      </button>
      </div>
      <div>
       <br/>
      <button  className= "github">
        Continue with Github
      </button>
      </div>
      </div>

      <div  className= "signIn">
        {/* {
          userDetail.filter(item => )
        } */}


 <button  className="butt" onClick={this.userLogin}>
Sign in

         </button>

      </div>
      <div  className = "footer">
      <hr  className= "horizontal"/>
      <h5  className= "already">Do not have account? registered here
      <Link to =  "/signup">
      <button   className = "smallbutt">Sign up </button>
      </Link>

      </h5>

      </div>

    </div>
   </div>
   </>
    )
  }
}

export default Login
