import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="inline-form needs-validation was-validated">
        <div className="form-group">
          <input type="text" className="form-control" required />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" required />
          <div className="invalid-feedback">
            <u>valide this shit bro</u>
          </div>
          <div className="valid-feedback">
            <u>your shit is valid</u>
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-md w-100 btn-primary"
            value="submit"
          />
        </div>
      </form>
    );
  }
}
export default Form;
