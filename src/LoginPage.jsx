import React from "react";
import UserTemplate from "./componants/UserTemplate";

function LoginPage() {
  const signUp = false;
  return (
    <div className="login-page">
      <UserTemplate 
      header="Login"
      text="Welcome back! Please log in to access your account."
      state={signUp}
      />
    </div>
  );
}

export default LoginPage;
