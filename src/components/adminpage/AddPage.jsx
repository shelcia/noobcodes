import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import InputComp from "./InputComp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const AddPage = ({ match }) => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const [darkTheme] = useContext(ThemeContext);
  const successNotify = (message) => {
    toast.success(message);
  };

  const errorNotify = (message) => {
    toast.error(message);
  };

  const add = async (e) => {
    e.preventDefault();
    // setIsLoading(true);

    const LINK = process.env.REACT_APP_ADMINDASH_API;

    const token = localStorage.getItem("NoobCode-Token");

    const response = {
      title: title,
      category: match.params.id,
      code: code,
      output: output,
    };

    console.log(response);

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "auth-token": token,
    };

    axios
      .post(`${LINK}code`, response, {
        headers: headers,
      })
      .then((response) => {
        console.log(response);
        successNotify("Article added succesfully !!");
      })
      .catch((error) => {
        console.log(error);
        errorNotify('Oops! The Article couldn"t be added 🥺🥺!!');
      });
  };
  return (
    <div
      className={
        darkTheme ? "bg-dark text-light h-90" : "bg-light text-dark h-90"
      }
    >
      <ToastContainer />
      <div className="container w-95">
        <div className="row h-90 pt-5">
          <div className="col-sm-6 mx-auto">
            <form>
              <InputComp
                name="Title"
                value={title}
                isRequired={true}
                handler={setTitle}
              />
              <textarea
                className="form-control mb-3"
                rows="7"
                value={code}
                onChange={(event) => setCode(event.target.value)}
                placeholder="Enter Code"
              />
              <InputComp
                name="Output"
                value={output}
                isRequired={false}
                handler={setOutput}
              />
              <button
                className="btn btn-primary"
                onClick={(event) => add(event)}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPage;
