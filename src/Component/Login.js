import React from 'react'
export default function Login() {
  return (
    <div>
      <h4 style={{ color: "red", marginLeft: "45%" }}>Log In</h4>
      <div className="row">
        <form className="col s12">
        <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          
          
        </form>
        <a className="waves-effect waves-light btn-small">Log in</a>
      </div>
      <p>If you Don't have account? <a href="/register">Click here</a></p>
    </div>
  )
}
