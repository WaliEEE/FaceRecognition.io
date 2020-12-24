import React, { PureComponent } from "react";

const SignIn = ({ onRouteChange }) => {
  return (
    <article className="br3 ba b--black-10 mv3 w-100 w-50-m w-25-l mw5 center shadow-5">
      <main className="pa4 black-80 center">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f3 fw5 ph0 mh0 center">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="center">
            <input
              onClick={() => onRouteChange("home")}
              className="f5 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Submit"
            />
          </div>
          <label className="mt3 lh-copy f6 pointer center">
            <input type="checkbox" className="mr1 mt1"/> Remember me
          </label>
          <div className=" center lh-copy mt3">
            <p
              onClick={() => onRouteChange("Register")}
              className="f5 link dim grow black db pointer"
            >
              Register
            </p>
          </div>
        </form>
      </main>
    </article>
  );
};

export default SignIn;
