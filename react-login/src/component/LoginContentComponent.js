import React from 'react';
import LoginFormComponent from './LoginFormComponent';
class LoginContentComponent extends React.Component {
    render() {
      return (
        <div>
          <h4>Enter your credentials</h4>
          <LoginFormComponent/>
        </div>
      )
    }
  }
  export default LoginContentComponent;