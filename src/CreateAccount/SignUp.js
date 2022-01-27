import React from "react"
import "./SignUp.css"
import Header from "../HomePage/Header"
import myContext from "../Context"
import {Link, navigate} from '@reach/router'
class SignUp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name : "",
      email: "",
      password:""
    }

    this.inputName = this.inputName.bind(this)
    this.inputEmail = this.inputEmail.bind(this)
    this.inputPassword = this.inputPassword.bind(this)
    this.clicking= this.clicking.bind(this)
  }
  static contextType = myContext
  inputName(e){
   this.setState({
    name: e.target.value
   })
 }
 inputEmail(e){
  this.setState({
   email: e.target.value
  })
}

// handleChange = (e) => {
//   this.setState({[e.target.name]: e.target.value})
// }

inputPassword(e){
  this.setState({
   password: e.target.value
  })
}
   handleClick() {
     console.log("called handleClick");
     const {userDetail} = this.context
      const inputValue = { name : this.state.name , email: this.state.email , password : this.state.password}
       const updatedList = userDetail.push(inputValue)
      this.setState({  userDetail : updatedList, name : "",
    email: "",
  password : ""})


  }

  clicking(){
    if(this.state.name && this.state.email && this.state.password){
      this.handleClick()
      alert("congratulations !! your account is registered now")
      navigate("/")
    }else{
      alert("invalid input")
    }
  }
  render(){
    const {userDetail} = this.context
console.log(userDetail)
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

            <h5>* Full Name</h5>
            <br/>
            <input className = "nameI" type = "text" placeholder = " John Doe " value ={this.state.name} onChange ={this.inputName}/>

          </div>
          <div>
          <br/>
            <h5>* Email</h5>
            <br/>
            <input type="email"  className = "emailI" value ={this.state.email} onChange ={this.inputEmail}  placeholder = "test@example.com"/>


          </div>
          <div>
          <br/>
            <h5>* Password</h5>
            <br/>
            <input className = "passI"  type = "password" value ={this.state.password} onChange ={this.inputPassword} maxLength="8" />

          </div>
          </div>
          <div className= "maindiv3">
            <br/>
            <br/>
           <div className = "vl"/>
           <br/>
           <h6> OR </h6>
           <br/>

           <div className = "vl"/>
         </div>
         <div className = "mainDiv2">
           <div>
             <br/>
             <br/>
             <button className="facebook">
           Continue with Facebook
         </button>
           </div>
         <div>
           <br/>
         <button className= "google">
           Continue with Google
         </button>
         </div>
         <div>
          <br/>
         <button className = "github">
           Continue with Github
         </button>
         </div>
         </div>

         <div className = "signIn">
         <button className = "butt" onClick = {this.clicking}>Sign Up </button>
         </div>
         <div className = "footer">
         <hr className = "horizontal"/>
         <h5 className = "already"> Already have an account?
         <Link to = "/">
          <button
         className = "smallbutt" >Sign In </button>
         </Link>

         </h5>

         </div>

       </div>
</div>

      </>

    )
  }

}

export default SignUp
