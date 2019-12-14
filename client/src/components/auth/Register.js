import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Mutations from "../../graphql/mutations";
import { Link } from "react-router-dom";

const { REGISTER_USER } = Mutations;

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  updateCache(client, { data }) {
    client.writeData({
      data: { isLoggedIn: data.register.loggedIn }
    });
  }

  render() {
    return (
      <Mutation
        mutation={REGISTER_USER}
        onCompleted={data => {
          const { token } = data.register;
          localStorage.setItem("auth-token", token);
        }}
        update={(client, data) => this.updateCache(client, data)}
      >
        {/* <div className="signup">
          <Link to="/">
            <img
              id="signup-logo"
              src={"Amplify_BW_Transparent.png"}
              alt="logo"
            ></img>
          </Link>
          <div className="content">
            <button id="signup-fb">Sign in as demo_user</button> */}
        {registerUser => (
          <div className="signup">
            <div className="signup-Header">
              <Link to="/">
                <img
                  id="signup-logo"
                  src={"Amplify_BW_Transparent.png"}
                  alt="logo"
                ></img>
              </Link>
            </div>
            <div className="content">
              <button id="signup-fb">Log in as demo user</button>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  registerUser({
                    variables: {
                      name: this.state.name,
                      email: this.state.email,
                      password: this.state.password
                    }
                  });
                }}
              >
                <br />
                <strong className="line-thru">or</strong>
                <h2 className="signup-h2">Sign up with your email address</h2>
                <div className="login-form">
                  <br />
                  <label>
                    <input
                      value={this.state.name}
                      onChange={this.update("name")}
                      className="input-register-1"
                      placeholder="Name"
                    />
                  </label>
                  <br />
                  <label>
                    <input
                      value={this.state.email}
                      onChange={this.update("email")}
                      className="input-register-1"
                      placeholder="Email"
                    />
                  </label>
                  <br />
                  <label>
                    <input
                      value={this.state.password}
                      onChange={this.update("password")}
                      className="input-register-1"
                      type="password"
                      placeholder="Password"
                    />
                  </label>
                  <br />
                  <button type="submit" className="signup-submit">Sign Up</button>
                  <div className="login-prompt">
                    Already have an account?
                    <Link id="login-highlight" to="/login">
                      Log in
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
        {/* </div>
        </div> */}
      </Mutation>
    );
  }
}

export default Register;