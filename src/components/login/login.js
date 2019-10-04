import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../../redux/actions/userActions';
import './login.css'

class Login extends Component {

    state = {
        email: '',
        password: '',
        formErrors: { email: '', password: '' },
        formState: { email: '', password: '' },
        emailValid: false,
        passwordValid: false,
        formValid: false
    }  

    initialState = {
        email: '',
        password: '',
        formErrors: { email: '', password: '' },
        formState: { email: '', password: '' },
        emailValid: false,
        passwordValid: false,
        formValid: false
    }

    changeHandler = e => {
        let { formState } = this.state;
        const name = e.target.name
        const value = e.target.value;
        this.setState({ [name]: value })
        this.setState({ formState: {...formState, [name]: 'touched'}})
        if(name === "email") {
            this.validateEmail(value);
        }
        if(name === "password") {
            this.validatePassword(value);
        }
    }

    validateEmail = (value) => {
        const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false;
        this.setState({ emailValid });
        return emailValid;
    }
    validatePassword = (password) => {
        const passwordValid = password.length > 6;
        this.setState({ passwordValid });
        return passwordValid;
    }
    validateFields() {
        const {email, password, formErrors} = this.state;
        const emailValid = this.validateEmail(email);
        const passwordValid = this.validatePassword(password);
        if (!emailValid) {
            this.setState({emailValid: false, formErrors: {...formErrors, email: 'email is invalid' } });
        } else {
            this.setState({emailValid: true, formErrors: {...formErrors, email: ''}});
        }
        if (passwordValid) {
            this.setState({passwordValid: true, formErrors: {...formErrors, password: ''}});
        } else {
            this.setState({passwordValid: false, formErrors: {...formErrors, password: 'password is invalid'}});
        }
    }

    async validateForm() {
        await this.setState({formValid: this.state.emailValid && this.state.passwordValid});
        return this.state.formValid;
    }

    resetForm() {
        this.setState(this.initialState);
    }
      
    submitHandler = e => {
        e.preventDefault();
        const { email, password, passwordValid, emailValid } = this.state
        this.validateFields();
        const formValid = passwordValid && emailValid
        if(formValid) {
            this.props.loginRequest({email, password});
            this.resetForm();
        }
        
    }

    render() {
        const { email, emailValid, password, passwordValid, formState, formErrors } = this.state
        return (
            <div className="container">
              <div className="row h-100">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                  <div className="card card-signin my-5">
                    <div className="card-body">
                      <h5 className="card-title text-center">Sign In</h5>
                      <form className="form-signin" onSubmit={this.submitHandler} noValidate>
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
                        </div>
          
                        <div className="form-label-group">
                          <input 
                          type="password"
                          id="inputPassword"
                          name="password"
                          value={ password }
                          id="inputPassword"
                          className= {formState.password === "touched" ? passwordValid ? "form-control is-valid" : "form-control is-invalid" : "form-control" }
                          placeholder="Password"
                          onChange={this.changeHandler}
                          required />
                          <label htmlFor="inputPassword">Password</label>
                          <div className="invalid-feedback text-center">Password is not valid</div>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                        <hr className="my-4" />
                        <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                        <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
  }
}



const mapStateToProps = state => {
    return {
        login: state.login.items
    }
}   

export default connect(mapStateToProps, { loginRequest })(Login);
