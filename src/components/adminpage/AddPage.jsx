import React, { useContext, useRef, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AceEditor from "react-ace";

const AddPage = ({ match }) => {
  const title = useRef("");
  const [code, setCode] = useState("");
  const output = useRef("");

  const history = useHistory();

  const [darkTheme] = useContext(ThemeContext);
  const successNotify = (message) => {
    toast.success(message);
  };

  const errorNotify = (message) => {
    toast.error(message);
  };

  const onChange = (newValue) => {
    setCode(newValue);
  };

  const add = async (e) => {
    e.preventDefault();

    if (title.current.value === "") {
      errorNotify("Please Fill out the Title");
      return;
    }
    if (code === "") {
      errorNotify("Please enter the code");
      return;
    }

    toast.warning("We are on our way to add your article in our backend");

    const LINK = process.env.REACT_APP_ADMINDASH_API;

    const token = localStorage.getItem("NoobCode-Token");

    const response = {
      title: title.current.value,
      category: match.params.id,
      code: code,
      output: output.current.value,
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
        if (response.data.status === "200")
          successNotify("Article added succesfully !!");
        else if (response.data.status === "400")
          errorNotify(response.data.message);
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
        <div className="row h-90 pt-5 scroll-y">
          <div className="col-sm-10 mx-auto">
            <form>
              <label htmlFor={`Title`}>Title:</label>
              <input
                type="text"
                ref={title}
                className="form-control"
                placeholder={`Enter Title`}
                required
              />
              <label htmlFor={`Code`} className="mt-4">
                Code:
              </label>
              <AceEditor
                className="w-100 mx-auto"
                style={{ fontFamily: "'Menlo', monospace" }}
                mode="python"
                theme={darkTheme ? "monokai" : "github"}
                fontSize={16}
                onChange={onChange}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                  showLineNumbers: true,
                  tabSize: 4,
                }}
              />
              <label htmlFor={`Output`} className="mt-4">
                Output:
              </label>
              <textarea
                className="form-control"
                ref={output}
                placeholder={`Enter Output`}
                rows="5"
              ></textarea>
              <div className="text-center my-5">
                <button
                  className="btn btn-primary"
                  onClick={(event) => add(event)}
                >
                  Add
                </button>
                <button
                  className="ml-4 btn btn-outline-primary"
                  onClick={() =>
                    history.push(`/admin/dashboard/${match.params.id}`)
                  }
                >
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPage;
