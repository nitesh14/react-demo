import React from 'react';
import RegisterFormComponent from './RegisterFormComponent';
class RegisterContentComponent extends React.Component {
    render() {
      return (
        <div>
          <h4>Enter your credentials</h4>
          <RegisterFormComponent/>
        </div>
      )
    }
  }
  export default RegisterContentComponent;