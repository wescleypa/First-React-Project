import React from 'react';

const Login = () => {
  return (
    <div>
      <form className="form-inline">
        <label className="sr-only" for="inlineFormInputName2">Name</label>
        <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe"></input>

        <label className="sr-only" for="inlineFormInputGroupUsername2">Username</label>
        <div className="input-group mb-2 mr-sm-2">
          <div className="input-group-prepend">
            <div className="input-group-text">@</div>
          </div>
          <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username"></input>
        </div>

        <div className="form-check mb-2 mr-sm-2">
          <input className="form-check-input" type="checkbox" id="inlineFormCheck"></input>
          <label className="form-check-label" for="inlineFormCheck">
            Remember me
          </label>
        </div>

        <button type="submit" className="btn btn-primary mb-2">Submit</button>
      </form>
    </div>
  );
};

export default Login;
