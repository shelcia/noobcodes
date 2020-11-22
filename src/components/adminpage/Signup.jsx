import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const LINK = process.env.REACT_APP_ADMINAUTH_API;
  const [isLoading, setIsLoading] = useState(false);

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
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    // console.log(response);

    axios
      .post(`${LINK}register`, response)
      .then((res) => {
        // console.log(res);
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
      <div className="container" id="container">
        <div className="row">
          <div className="col-sm-6">
            <h3 className="text-center">Signup</h3>
            <form className="was-validated" onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  ref={name}
                  className="form-control"
                  id="name"
                  placeholder="Enter name"
                  name="name"
                  required
                />
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  ref={email}
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                  required
                />
                <div className="invalid-feedback">
                  Please enter valid email.
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input
                  type="password"
                  ref={password}
                  className="form-control"
                  id="pwd"
                  placeholder="Enter password"
                  name="pswd"
                  required
                />
                <div className="invalid-feedback">
                  Your password must contain atleast 6 characters.
                </div>
              </div>
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
    </React.Fragment>
  );
};

export default Signup;
