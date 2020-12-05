import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useHistory } from "react-router-dom";
import AceEditor from "react-ace";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { CodeContext } from "../context/CodeContext";

const EditPage = ({ match }) => {
  const [darkTheme] = useContext(ThemeContext);
  const [codes] = useContext(CodeContext);

  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [category, setCategory] = useState("");

  const onChange = (newValue) => {
    setCode(newValue);
  };

  useEffect(() => {
    const assignValues = () => {
      const codeReq = codes.filter((code) => code.codeId === match.params.id);
      console.log(codeReq);
      if (codeReq.length) {
        setTitle(codeReq[0].title);
        setCode(codeReq[0].code);
        setCategory(codeReq[0].category);
        if (codeReq[0].output) {
          setOutput(codeReq[0].output);
        }
      }
    };
    assignValues();
  }, [codes, match.params.id]);

  const history = useHistory();

  const successNotify = (message) => {
    toast.success(message);
  };

  const errorNotify = (message) => {
    toast.error(message);
  };

  const edit = async (e) => {
    e.preventDefault();

    toast.warning("We are on our way to edit your article in our backend");

    const LINK = process.env.REACT_APP_ADMINDASH_API;

    const token = localStorage.getItem("NoobCode-Token");

    const response = {
      title: title,
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
      .put(`${LINK}code/${match.params.id}`, response, {
        headers: headers,
      })
      .then((response) => {
        console.log(response);
        if (response.data.status === "200")
          successNotify("Article edited succesfully !!");
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
            <h2>Editing {title}</h2>
            <hr></hr>
            <form>
              <label htmlFor={`Title`}>Title:</label>
              <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="form-control"
                placeholder={`Enter Title`}
                required
              />
              <label htmlFor={`Code`} className="mt-4">
                Code:
              </label>
              <AceEditor
                className="w-100 mx-auto "
                style={{ fontFamily: "'Menlo', monospace" }}
                mode="python"
                theme={darkTheme ? "monokai" : "github"}
                fontSize={16}
                onChange={onChange}
                value={code}
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
                value={output}
                onChange={(event) => setOutput(event.target.value)}
                placeholder={`Enter Output`}
                rows="5"
              ></textarea>
              <div className="text-center my-5">
                <button
                  className="btn btn-primary"
                  onClick={(event) => edit(event)}
                >
                  Confirm Edit
                </button>
                <button
                  className="ml-4 btn btn-outline-primary"
                  onClick={() => history.push(`/admin/dashboard/${category}`)}
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

export default EditPage;
