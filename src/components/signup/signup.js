import React, { Component } from 'react'
import '../login/login.css'

export default class Signup extends Component {

  state = {
    email: '',
    password: '',
    username: '',
    confirmPassword: '',
    formErrors: { confirmPassword: '', email: '', password: '', username: '' },
    formState: { confirmPassword: '', email: '', password: '', username: '' },
    emailValid: false,
    passwordValid: false,
    usernameValid: false,
    confirmPasswordValid: false,
    formValid: false
}

  initialState = {
    email: '',
    password: '',
    confirmPassword: '',
    formErrors: { confirmPassword: '', email: '', password: '', username: '' },
    formState: { confirmPassword: '', email: '', password: '', username: '' },
    emailValid: false,
    passwordValid: false,
    usernameValid: false,
    confirmPasswordValid: false,
    formValid: false
}

changeHandler = e => {
  let { formState, password } = this.state;
  const name = e.target.name
  const value = e.target.value;
  this.setState({ [name]: value })
  this.setState({ formState: {...formState, [name]: 'touched'}})
  switch(name){
    case 'email':
      this.validateEmail(value);
      break;
    case 'password':
      this.validatePassword(value);
      break;
    case 'username':
      this.validateUsername(value);
      break;
    case 'confirmPassword':
      this.validateConfirmPassword(value, password);
      break;
  }
}

validateConfirmPassword = (password, confirmPassword) => {
  const { formErrors } = this.state;
  const matchingPasswords = password === confirmPassword;
  if(matchingPasswords) {
    this.setState({confirmPasswordValid: true, formErrors: {...formErrors, confirmPassword: ''}});
  } else {
    this.setState({confirmPasswordValid: false, formErrors: {...formErrors, confirmPassword: 'passwords do not match'}});
  }
  return matchingPasswords;
}

validateEmail = (value) => {
  const { formErrors } = this.state;
  const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false;
  if (emailValid) {
      this.setState({emailValid: true, formErrors: {...formErrors, email: ''}})
  } else {
      this.setState({emailValid: false, formErrors: {...formErrors, email: 'Invalid email' } });
  }
  return emailValid;
}
validatePassword = (password) => {
  const passwordValid = password.length >= 6;
  const { formErrors, confirmPassword } = this.state;
  this.validateConfirmPassword(password, confirmPassword);
  if (passwordValid) {
      this.setState({passwordValid: true, formErrors: {...formErrors, password: ''}});
  } else {
      this.setState({passwordValid: false, formErrors: {...formErrors, password: 'Invalid password'}});
  }
  return passwordValid;
}

validateUsername(username) {
  const { formErrors } = this.state;
  const usernameValid = username.length >= 3;
  if(usernameValid) {
    this.setState({usernameValid: true, formErrors: {...formErrors, username: ''}});
  } else {
    this.setState({usernameValid: false, formErrors: {...formErrors, username: 'Invalid username'}});
  }
  return usernameValid;
}

validateFields() {
  const { email, password, confirmPassword, username } = this.state;
  this.validateEmail(email);
  this.validatePassword(password);
  this.validateConfirmPassword(confirmPassword);
  this.validateUsername(username);
}

validateForm() {
  const { emailValid, passwordValid, confirmPasswordValid, usernameValid } = this.state;
  const formValid = emailValid && passwordValid && confirmPasswordValid && usernameValid;
  this.setState({ formValid });
  console.log('formValid', formValid);
  return formValid;
}

submitHandler = e => {
  e.preventDefault();
  const { email, password, passwordValid, emailValid } = this.state
  this.validateFields();
  const formValid = this.validateForm();
  if(formValid) {
      this.props.loginRequest({email, password});
      this.resetForm();
  }   
}

resetForm() {
  this.setState(this.initialState);
}

  render() {
    const {
      formState,
      emailValid,
      passwordValid,
      formErrors,
      confirmPasswordValid,
      email,
      password,
      confirmPassword,
      username,
      usernameValid,
    } = this.state;
    return (
    <div className="container">
        <div className="row h-100">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Writer Sign Up</h5>
                <form className="form-signin">
                <div className="form-label-group">
                  <input 
                    type="email"
                    id="inputEmail"
                    name="email"
                    className={ formState.email === "touched" ? emailValid ? "form-control is-valid": "form-control is-invalid" : "form-control" } 
                    value={email}
                    placeholder="Email address"
                    onChange={this.changeHandler}
                    required />
                  <label htmlFor="inputEmail">Email address</label>
                  <div className="invalid-feedback">{formErrors.email}</div>
                </div>

                <div className="form-label-group">
                  <input
                    type="username"
                    id="newUsername" 
                    name="username"
                    className={ formState.username === "touched" ? usernameValid ? "form-control is-valid": "form-control is-invalid" : "form-control" }
                    value={username}
                    placeholder="Username"
                    onChange={this.changeHandler}
                    required />
                  <label htmlFor="newUsername">Username</label>
                  <div className="invalid-feedback">{formErrors.username}</div>
                </div>
    
                  <div className="form-label-group">
                    <input
                      type="password"
                      name="password"
                      id="newPassword"
                      className={ formState.password === "touched" ? passwordValid ? "form-control is-valid": "form-control is-invalid" : "form-control" }
                      onChange={this.changeHandler}
                      value={password}
                      placeholder="Password"
                      required />
                    <label htmlFor="newPassword">Password</label>
                    <div className="invalid-feedback">{formErrors.password}</div>
                  </div>

                  <div className="form-label-group">
                    <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className={ formState.confirmPassword === "touched" ? confirmPasswordValid ? "form-control is-valid": "form-control is-invalid" : "form-control" }
                    onChange={this.changeHandler}
                    value={confirmPassword}
                    placeholder="confirmPassword"
                    required />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="invalid-feedback">{formErrors.confirmPassword}</div>
                  </div>
    
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign up</button>
                  <hr className="my-4" />
                  <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign up with Google</button>
                  <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign up with Facebook</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
