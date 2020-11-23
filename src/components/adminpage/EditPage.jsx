import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import InputComp from "./InputComp";

const EditPage = () => {
  const [darkTheme] = useContext(ThemeContext);
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  return (
    <div
      className={
        darkTheme ? "bg-dark text-light h-90" : "bg-light text-dark h-90"
      }
    >
      <div className="container w-95">
        <div className="row h-90 pt-5">
          <div className="col-sm-6 mx-auto">
            <form>
              <InputComp
                name="Title"
                value={title}
                isRequired={false}
                handler={setTitle}
              />
              <label htmlFor={`code`}>Code:</label>
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
              <div className="text-center">
                <button className="btn btn-primary">Confirm Edit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
