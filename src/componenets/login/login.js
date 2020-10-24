import React, { Component } from "react";
import { toast } from "react-toastify";
class Login extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };

  validateProperty = () => {
    const errors = {};
    const { username, password } = this.state.account;
    if (username === "") {
      errors["username"] = "Username is required";
    }
    if (password === "") {
      errors["password"] = "Password is required";
    } else {
      errors["no"] = true;
    }
    return errors;
  };

  handleChange = ({ currentTarget }) => {
    const account = { ...this.state.account };
    account[currentTarget.name] = currentTarget.value;
    this.setState({
      account,
    });
  };

  refObj = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    let errors = this.validateProperty();
    this.setState({ errors });
    if (errors.no) {
      toast("Login form Submited");
    }
  };
  render() {
    const { errors, account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor={account.username}>Username</label>
            <input
              name="username"
              onChange={this.handleChange}
              value={account.username}
              id="username"
              type="text"
              className="form-control"
            />
            {errors.username && (
              <div className="alert alert-danger">{errors.username}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              onChange={this.handleChange}
              value={account.password}
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          {errors.password && (
            <div className="alert alert-danger">{errors.password}</div>
          )}
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
