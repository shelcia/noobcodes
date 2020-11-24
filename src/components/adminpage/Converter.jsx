import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import AceEditor from "react-ace";
import { CopyBlock, dracula, github } from "react-code-blocks";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";

const Converter = () => {
  const [darkTheme] = useContext(ThemeContext);
  const [code, setCode] = useState("");
  const [text, setText] = useState("");

  const converterProgram = (event) => {
    event.preventDefault();
    setCode(text.trimRight().replace(/\n/g, "\\n").replace(/"/g, "'"));
    console.log(code);
  };
  function onChange(newValue) {
    setText(newValue);
  }

  return (
    <div
      className={
        darkTheme
          ? "bg-dark text-light h-90 scroll-y"
          : "bg-light text-dark h-90 scroll-y"
      }
    >
      <div className="container w-95">
        <div className="my-3 mb-5">
          <h4>Python Editor</h4>
          <hr />
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
          <div className="text-center my-4">
            <button
              className="btn btn-primary"
              onClick={(event) => converterProgram(event)}
            >
              Convert
            </button>
          </div>
          <h4>One Line Output</h4>
          <hr />
          <CopyBlock
            className="shadow"
            language={`python`}
            text={code}
            showLineNumbers={true}
            theme={darkTheme ? dracula : github}
            wrapLines={true}
            codeBlock
          />
        </div>
      </div>
    </div>
  );
};

export default Converter;
