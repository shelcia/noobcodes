import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Converter = () => {
  const [darkTheme] = useContext(ThemeContext);
  const [code, setCode] = useState("");

  const converterProgram = (event) => {
    event.preventDefault();
    setCode(code.trimRight().replace(/\n/g, "\\n").replace(/"/g, "'"));
    console.log(code);
  };

  return (
    <div
      className={
        darkTheme ? "bg-dark text-light h-90" : "bg-light text-dark h-90"
      }
      style={{ overflowY: "scroll" }}
    >
      <div className="container w-95">
        <div className="my-3">
          <textarea
            style={{ fontSize: "0.8rem", fontFamily: "'Menlo', sans-serif" }}
            id="codearea"
            className={
              darkTheme ? "form-control background-dark" : "form-control"
            }
            value={code}
            onChange={(event) => setCode(event.target.value)}
            cols="120"
            rows="25"
          ></textarea>
          <div className="text-center mt-4">
            <button
              className="btn btn-primary"
              onClick={(event) => converterProgram(event)}
            >
              Convert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converter;
