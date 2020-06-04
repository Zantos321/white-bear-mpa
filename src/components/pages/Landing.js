import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import { Link } from "react-router-dom";
import constellationLogo from "../../img/logo-landing.png";

export default function Landing() {
   return (
      <>
         <Header />
         <Navigation />
         <div className="landing-background">
            <div className="container-fluid">
               <div className="row mb-8 pt-7 ml-2 justify-content-left">
                  <div className="header">
                     <img
                        className="img-fluid"
                        src={constellationLogo}
                        alt="white bear constellation"
                     />
                     <h1 className="logo-text d-inline ">White Bear</h1>
                  </div>
               </div>

               <div className="row">
                  <div className="offset-1 col-10 offset-sm-1 col-sm-9 offset-md-1 col-md-4 offset-lg-2 col-lg-4 offset-xl-2 col-xl-4 mb-6">
                     <div className="card">
                        <div className="card-body">
                           <div className="landing-card">
                              <h2 className="card-title">Nice to meet you</h2>
                              <p className="card-text mb-5">
                                 Sign up for White Bear.Free Forever.
                              </p>
                              <button
                                 className="btn btn-success btn-landing btn-block hide-me"
                                 aria-expanded="false"
                                 aria-controls="#signup-collapse"
                                 id="signupButton"
                              >
                                 Sign up
                              </button>
                              <div className="collapse" id="signup-collapse">
                                 <p className="signup-text mb-4">
                                    Lets get you signed up.
                                 </p>
                                 <div className="form-group">
                                    <label className="input-text" for="email">
                                       Email address
                                    </label>
                                    <input
                                       type="email"
                                       className="form-control"
                                       id="signupEmail"
                                       aria-describedby="email-help"
                                    />
                                    <div
                                       className="alert alert-danger d-none"
                                       role="alert"
                                       id="signupEmailAlert"
                                    >
                                       Please enter your email address.
                                    </div>
                                    <div
                                       className="alert alert-danger d-none"
                                       role="alert"
                                       id="passwordMatchesEmailAlert"
                                    >
                                       Your email address cannot be used in you
                                       password.
                                    </div>
                                    <div
                                       className="alert alert-danger d-none"
                                       role="alert"
                                       id="garbageEmailAlert"
                                    >
                                       Please enter an email that has more than
                                       three unique characters.
                                    </div>
                                    <div
                                       className="alert alert-danger d-none"
                                       role="alert"
                                       id="validEmailAlert"
                                    >
                                       Please enter a valid email address.
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <label
                                       className="input-text"
                                       for="password"
                                    >
                                       Create a password
                                    </label>
                                    <input
                                       type="password"
                                       className="form-control"
                                       id="signupPassword"
                                    />
                                    <div
                                       className="alert alert-danger d-none"
                                       role="alert"
                                       id="signupPasswordAlert"
                                    >
                                       Please create a 9 character password.
                                    </div>
                                    <div
                                       className="alert alert-danger d-none"
                                       role="alert"
                                       id="passwordMatchesEmailAlert"
                                    >
                                       Your password cannot match your email.
                                    </div>
                                    <div
                                       className="alert alert-danger d-none"
                                       role="alert"
                                       id="commonPasswordAlert"
                                    >
                                       Your password is too common, try again.
                                    </div>
                                 </div>
                                 <button
                                    id="signupVerify"
                                    type="button"
                                    className="btn btn-success btn-landing btn-block mt-5"
                                 >
                                    Lets go!
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="offset-1 col-10 offset-sm-1 col-sm-9 offset-md-1 col-md-4 offset-lg-1 col-lg-4 offset-xl-1 col-xl-4">
                     <div className="card">
                        <div className="card-body">
                           <div className="landing-card">
                              <h2 className="card-title">Welcome back</h2>
                              <p className="card-text mb-4">
                                 Log in with your email address and password
                              </p>
                              <div className="form-group" id="loginForm">
                                 <label className="input-text" for="email">
                                    Email address
                                 </label>
                                 <input
                                    type="email"
                                    className="form-control"
                                    id="loginEmail"
                                    aria-describedby="email-help"
                                 />
                                 <div
                                    className="alert alert-danger d-none"
                                    role="alert"
                                    id="emailAlert"
                                 >
                                    Please enter your email address.
                                 </div>
                              </div>
                              <div className="form-group" id="loginForm">
                                 <label className="input-text" for="password">
                                    Password
                                 </label>
                                 <input
                                    type="password"
                                    className="form-control"
                                    id="loginPassword"
                                 />
                                 <div
                                    className="alert alert-danger d-none"
                                    role="alert"
                                    id="passwordAlert"
                                 >
                                    Please enter a password over 9 characters.
                                 </div>
                              </div>
                              <Link
                                 to="/create-answer"
                                 id="#loginVerify"
                                 className="btn btn-success btn-lg btn-landing float-right"
                              >
                                 Log in
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
