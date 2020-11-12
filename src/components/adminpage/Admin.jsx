import React from "react";

const Admin = () => {
  return (
    <React.Fragment>
      <form>
        <div className="form-group">
          <label for="email">Email address:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id="email"
          />
        </div>
        <div className="form-group">
          <label for="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id="pwd"
          />
        </div>
        <div className="form-group form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" /> Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default Admin;
