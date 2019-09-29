import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../../redux/actions/userActions';
import './login.css'

class Login extends Component {
    componentDidMount() {
        this.props.loginRequest();
    }

    state = {
        email: '',
        password: ''
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        this.props.loginRequest();
    }

    render() {
        const { email, password } = this.state
        return (
            <div className="container">
              <div className="row h-100">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                  <div className="card card-signin my-5">
                    <div className="card-body">
                      <h5 className="card-title text-center">Sign In</h5>
                      <form className="form-signin" onSubmit={this.submitHandler}>
                        <div className="form-label-group">
                          <input 
                            type="email"
                            id="inputEmail"
                            name="email"
                            className="form-control"
                            value={email}
                            placeholder="Email address"
                            onChange={this.changeHandler}
                            required />
                          <label htmlFor="inputEmail">Email address</label>
                        </div>
          
                        <div className="form-label-group">
                          <input 
                          type="password"
                          name="password"
                          id="inputPassword"
                          className="form-control"
                          placeholder="Password"
                          required />
                          <label htmlFor="inputPassword">Password</label>
                        </div>
          
                        <div className="custom-control custom-checkbox mb-3">
                          <input type="checkbox" className="custom-control-input" id="customCheck1" />
                          <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
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
