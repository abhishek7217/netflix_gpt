import React from "react";
import Header from "./Header";

const Login = () => {
  const [isSignUp, setIsSignUp] = React.useState(true);
  const toggleSignForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_large.jpg"
          alt="Netflix Background"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black/80 my-32 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="text-3xl font-bold py-4">
          {" "}
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
         {isSignUp && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <p className="text-gray-500" onClick={toggleSignForm}>
          {isSignUp
            ? "Already have an account? Sign In"
            : "New to Netflix? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
