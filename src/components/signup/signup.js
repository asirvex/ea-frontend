import React, { Component } from 'react'
import '../login/login.css'

export default class Signup extends Component {
  render() {
    return (
    <div className="container">
        <div className="row h-100">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Writer Sign Up</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input type="email" id="newEmail" className="form-control" placeholder="Email address" required autofocus />
                    <label for="inputEmail">Email address</label>
                  </div>

                  <div className="form-label-group">
                    <input type="username" id="newUsername" className="form-control" placeholder="Username" required autofocus />
                    <label for="inputUsername">Username</label>
                  </div>
    
                  <div className="form-label-group">
                    <input type="password" id="newPassword" className="form-control" placeholder="Password" required />
                    <label for="inputPassword">Password</label>
                  </div>

                  <div className="form-label-group">
                    <input type="password" id="confirmPassword" className="form-control" placeholder="confirmPassword" required />
                    <label for="confirmPassword">Confirm Password</label>
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
