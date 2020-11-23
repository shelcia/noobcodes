import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputComp from "./InputComp";
import { ThemeContext } from "../context/ThemeContext";

const Login = () => {
  const [darkTheme] = useContext(ThemeContext);
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
    event.preventDefault();
    setIsLoading(true);
    localStorage.setItem(`${PREFIX}Email`, email);

    axios
      .post(`${LINK}login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
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
      <div
        className={
          darkTheme ? "bg-dark text-light h-90" : "bg-light text-dark h-90"
        }
      >
        <div className="container w-95">
          <div className="row h-90">
            <div className="col-sm-6 code-container mx-auto">
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
      </div>
    </React.Fragment>
  );
};

export default Login;
