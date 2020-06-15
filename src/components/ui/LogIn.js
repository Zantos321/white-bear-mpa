import React from "react";
import classnames from "classnames";
//import { Link } from "react-router-dom";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";

export default class LogIn extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isDisplayingInputs: false,
         emailError: "",
         passwordError: "",
         hasEmailError: false,
         hasPasswordError: false,
      };
   }

   showInputs() {
      this.setState({
         isDisplayingInputs: true,
      });
   }

   async setEmailState(emailInput) {
      //Email Cannot be blank
      //must have valid email regex
      const lowerCasedEmailInput = emailInput.toLowerCase();
      // eslint-disable-next-line
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailInput === "")
         this.setState({
            emailError: "Please enter your email address.",
            hasEmailError: true,
         });
      else if (emailRegex.test(lowerCasedEmailInput) === false) {
         this.setState({
            emailError: "Not a valid email address.",
            hasEmailError: true,
         });
      } else {
         this.setState({ emailError: "", hasEmailError: false });
      }
   }

   async setPasswordState(passwordInput, emailInput) {
      // can't be blank

      console.log(passwordInput);
      if (passwordInput === "") {
         this.setState({
            passwordError: "Please enter your password.",
            hasPasswordError: true,
         });
      } else {
         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }

   async validateAndCreateUser() {
      const emailInput = document.getElementById("login-email-input").value;
      const passwordInput = document.getElementById("login-password-input")
         .value;
      await this.setEmailState(emailInput);
      await this.setPasswordState(passwordInput, emailInput);
      if (
         this.state.hasEmailError === false &&
         this.state.hasPasswordError === false
      ) {
         const user = {
            id: getUuid(),
            email: emailInput,
            password: hash(passwordInput),
            createdAt: Date.now(),
         };
         console.log(user);
      }
   }

   render() {
      return (
         <div className="offset-1 col-10 offset-sm-1 col-sm-9 offset-md-1 col-md-4 offset-lg-1 col-lg-4 offset-xl-1 col-xl-4">
            <div className="card">
               <div className="card-body">
                  <div className="landing-card">
                     <h2 className="card-title">Welcome back</h2>
                     <p className="card-text mb-4">
                        Log in with your email address and password
                     </p>
                     <div className="form-group" id="loginForm">
                        <label className="input-text" htmlFor="email">
                           Email address
                        </label>
                        <input
                           type="email"
                           className={classnames({
                              "form-control": true,
                              "is-invalid": this.state.hasEmailError,
                           })}
                           id="login-email-input"
                           aria-describedby="email-help"
                        />

                        {this.state.hasEmailError && (
                           <div
                              className="alert alert-danger d-none"
                              role="alert"
                              id="login-email-alert"
                           >
                              {this.state.emailError}
                           </div>
                        )}
                     </div>
                     <div className="form-group" id="loginForm">
                        <label className="input-text" htmlFor="password">
                           Password
                        </label>
                        <input
                           type="password"
                           className={classnames({
                              "form-control": true,
                              "is-invalid": this.state.hasPasswordError,
                           })}
                           id="login-password-input"
                        />

                        {this.state.hasPasswordError && (
                           <div
                              className="alert alert-danger d-none"
                              role="alert"
                              id="login-password-alert"
                           >
                              {this.state.passwordError}
                           </div>
                        )}
                     </div>
                     <button
                        to="/create-answer"
                        id="#loginVerify"
                        className="btn btn-success btn-lg btn-landing float-right"
                        onClick={() => {
                           this.validateAndCreateUser();
                        }}
                     >
                        Log in
                     </button>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
