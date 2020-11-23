import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputComp from "./InputComp";
import { ThemeContext } from "../context/ThemeContext";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LINK = process.env.REACT_APP_ADMINAUTH_API;
  const [isLoading, setIsLoading] = useState(false);

  const darkTheme = useContext(ThemeContext);

  const sucessNotify = (message) => {
    toast.success(message);
  };
  const failedNotify = (message) => {
    toast.error(message);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const response = {
      name: name,
      email: email,
      password: password,
    };
    // console.log(response);

    axios
      .post(`${LINK}register`, response)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        if (res.data.status === "400") {
          failedNotify(res.data.message);
        } else {
          sucessNotify(
            "Account created succesfully ! you can go ahead and login."
          );
        }
      })
      .catch((error) => {
        setIsLoading(false);
        failedNotify(error);
        console.log(error);
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
              <h3 className="text-center">Signup</h3>
              <form className="was-validated" onSubmit={onSubmit}>
                <InputComp
                  name="Name"
                  value={name}
                  isRequired={true}
                  handler={setName}
                />
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
                  feedback="Your password must contain atleast 6 characters."
                />
                {isLoading ? (
                  <p>We are verifying...</p>
                ) : (
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                )}
              </form>
              <div className="text-center mt-5">
                Already have an account? then <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
