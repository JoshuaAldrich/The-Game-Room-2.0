import React from "react";
class  Login extends React.Component{
  state={
    email:"",
    pwd:"",
  
  }
  handleChange = (e) =>{
    const {name, value}= e.target
    this.setState({[name]:value})

  }
  handleSubmit = (e) =>{

  }
  render(){
    return<>
      
      <div>
      </div>
      <div>
        <form>
          <input type="email" name="email" placeholder="email" required
           onChange={this.handleChange}/>
          <input type="password" name="pwd" placeholder="password" required
           onChange={this.handleChange}/>
          <button onsubmit>Login</button>
          <button onsubmit> Create Account</button>
        </form>
      </div>
    </>
  }
}

export default Login;