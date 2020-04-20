import React from 'react';
import InputComponent from './InputComponent';

class LoginFormComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            message: ""
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.setUsername = this.setUsername.bind(this)
        this.setPassword = this.setPassword.bind(this)
    }

    setUsername(username) {
        this.setState({ username: username })
    }

    setPassword(password) {
        this.setState({ password: password })
    }

    clickHandler() {
        let username = this.state.username;
        let password = this.state.password;
        console.log(username);
        if (username === 'admin' && password === 'admin') {
            this.setState({ message: "Admin user is successfully logged in" })
        } else {
            this.setState({ message: "Invalid Credentials" })
        }
    }

    render() {
        return (
            <div>
                <InputComponent id="username" labelName="Username: " inputType="text" userproperty={this.setUsername} />
                <InputComponent id="password" labelName="Password: " inputType="password" userproperty={this.setPassword} />
                <button onClick={this.clickHandler}>Login</button>
                <p>{this.state.message}</p>
            </div>
        )
    }
}
export default LoginFormComponent;