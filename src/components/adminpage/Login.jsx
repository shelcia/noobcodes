import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputComp from "./InputComp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const LINK = process.env.REACT_APP_ADMINAUTH_API;
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const PREFIX = "NoobCode-";

  const sucessNotify = (message) => {
    toast.success(message);
  };
  const failedNotify = (message) => {
    toast.error(message);
  };

  const onSubmit = (event) => {
    setIsLoading(true);
    localStorage.setItem(`${PREFIX}Email`, email.current.value);
    event.preventDefault();
    axios
      .post(`${LINK}signin`, {
        email: email.current.value,
        password: password.current.value,
      })
      .then((res) => {
        // console.log(res);
        setIsLoading(false);
        localStorage.setItem(`${PREFIX}Token`, res.data.message.token);
        localStorage.setItem(`${PREFIX}name`, res.data.message.name);
        sucessNotify("Login succesfulll");
        history.push("/admin/rombakushithaan/dashboard");
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        failedNotify("Incorrect Credentials");
      });
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="container" id="container">
        <div className="row">
          <div className="col-sm-6">
            <h3 className="text-center">Login</h3>
            <form className="was-validated" onSubmit={onSubmit}>
              <InputComp
                name="Email"
                value={email}
                isRequired={true}
                handler={setEmail}
                type="email"
                feedback="Please enter valid email."
              />
              <InputComp
                name="Password"
                value={password}
                isRequired={true}
                handler={setPassword}
                type="password"
              />

              <div className="text-center">
                {isLoading ? (
                  <p>We are verifying...</p>
                ) : (
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                )}
              </div>
            </form>
            <div className="text-center mt-5">
              Don't have an account? then <Link to="/signup">Signup</Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
