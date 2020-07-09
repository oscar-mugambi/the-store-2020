import React from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  auth,
  createuserProfileDocument,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  state = {
    display: "",
    emial: "",
    password: "",
    confirmPassword: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { display, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passowrds  don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form action=" " onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={displayName}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
