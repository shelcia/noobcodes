import React from "react";

const InputComp = ({ value, name, isRequired, handler, type, feedback }) => {
  // console.log({ type, handler, value });

  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor={`${name}`}>{name}:</label>
        {isRequired ? (
          <input
            type={type ? type : `text`}
            value={value}
            onChange={(e) => handler(e.target.value)}
            className="form-control"
            id={`${name}`}
            placeholder={`Enter ${name}`}
            name={`${name}`}
            required
          />
        ) : (
          <input
            type={type ? type : `text`}
            value={value}
            onChange={(e) => handler(e.target.value)}
            className="form-control"
            id={`${name}`}
            placeholder={`Enter ${name}`}
            name={`${name}`}
          />
        )}
        <div className="invalid-feedback">
          {feedback ? feedback : `Please fill out this field.`}
        </div>
      </div>
    </React.Fragment>
  );
};

export default InputComp;
