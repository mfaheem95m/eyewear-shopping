import React from "react"
import "./SingUp.css"
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


    <div class = "loginpage">
      <div class = "header">
      <h3> Sign up to Salinaka
</h3>
       </div>
      <div class = "mainDiv1">

       <div>
       <br/>
       <br/>
         <h5>* Email</h5>
         <br/>
         <input  class = "emailI" type = "email" placeholder = " test@example.com " onChange={this.inputEmail}/>

       </div>
       <div>
       <br/>
         <h5>* Password</h5>
         <br/>
         <input class = "passI"  type = "text" placeholder = " Your Password" onChange={this.inputPassword}/>

       </div>
       <div>
         <br/>
         <h5 class= "under"> Forget password? </h5>
       </div>
       </div>
       <div class = "maindiv3">
         <br/>
         <br/>
        <div class = "vl"/>
        <br/>
        <h6> OR </h6>
        <br/>

        <div class = "vl"/>
      </div>
      <div class = "mainDiv2">
        <div>
          <br/>
          <br/>
          <button class="facebook">
        Continue with Facebook
      </button>
        </div>
      <div>
        <br/>
      <button class = "google">
        Continue with Google
      </button>
      </div>
      <div>
       <br/>
      <button class = "github">
        Continue with Github
      </button>
      </div>
      </div>

      <div class = "signIn">
        {/* {
          userDetail.filter(item => )
        } */}


 <button class="butt" onClick={this.userLogin}>
Sign in

         </button>

      </div>
      <div class = "footer">
      <hr class = "horizontal"/>
      <h5 class = "already">Do not have account? registered here
      <Link to =  "/signup">
      <button  class = "smallbutt">Sign up </button>
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
