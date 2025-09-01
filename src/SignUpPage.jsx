import React from "react";
import UserTemplate from "./componants/UserTemplate";

function SignUpPage() {
  const signUp = true;
  return (
    <div className="sign-up-page">
      <UserTemplate
        header="Sign Up"
        text="Create an account to unlock exclusive features."
        state={signUp}
      />
    </div>
  );
}

export default SignUpPage;
