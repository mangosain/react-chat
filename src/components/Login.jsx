import React from "react";
import { GoogleOutlined } from "@ant-design/icons";
import "firebase/compat/auth";

import { auth } from "../firebase";
import firebase from "firebase/compat/app";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to TextLink!</h2>
        <div
          className="login-button google"
          onClick={() => {
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
          }}
        >
          <GoogleOutlined /> Sign in with <b>Google</b>
        </div>
      </div>
    </div>
  );
};

export default Login;
