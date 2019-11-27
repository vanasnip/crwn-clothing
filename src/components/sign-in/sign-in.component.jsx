import React, { Component } from 'react'

import './sign-in.styles.scss';


export default class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }
  
  handleSubmit = event => {
    event.preventDefault();
    this.setState({email:'', password:''});
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({[name]: value});
  }
  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input type="email" name="email" value={this.state.email} required onChange={this.handleChange}/>
          <label htmlFor="email">Email</label>

          <input type="password" name="password" value={this.state.email} required onChange={this.handleChange}/>
          <label htmlFor="password">Password</label>

          <input type="submit" value="Submit Form"/>
        </form>
      </div>
    )
  }
}