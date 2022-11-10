import React from "react";

export default function Register() {
  return (
    <div>
      <h4 style={{ color: "red", marginLeft: "45%" }}>Register</h4>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
               
                id="first_name"
                type="text"
                className="validate"
              />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <p>
            <label>
              <input type="checkbox"  />
              <span>Agree Terms and conditions</span>
            </label>
          </p>
        </form>
        <a className="waves-effect waves-light btn-small">Register</a>
      </div>
    </div>
  );
}
