import React from 'react';
import InputComponent from './InputComponent';

class RegisterFormComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            email: "",
            message: ""
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.setUsername = this.setUsername.bind(this)
        this.setPassword = this.setPassword.bind(this)
        this.setFirstName = this.setFirstName.bind(this);
        this.setLastName = this.setLastName.bind(this);
        this.setEmail = this.setEmail.bind(this);
    }

    setUsername(username) {
        this.setState({ username: username })
    }

    setPassword(password) {
        this.setState({ password: password })
    }

    setFirstName(firstname) {
        this.setState({ firstname: firstname })
    }

    setLastName(lastname) {
        this.setState({ lastname: lastname })
    }

    setEmail(email) {
        this.setState({ email: email })
    }

    clickHandler() {
        let username = this.state.username;
        let password = this.state.password;
        let firstname = this.state.firstname;
        let lastname = this.state.lastname;
        let email = this.state.email;
        console.log(username);
        if (username !== '' && password !== '' && firstname !== '' && lastname !== '' && email !== '') {
            let msg = "User " + firstname + " " + lastname + " is registered successfully"
            this.setState({ message: msg})
        } else {
            this.setState({ message: "Error occured during user registration" })
        }
    }

    render() {
        return (
            <div>
                <InputComponent id="username" labelName="Username: " inputType="text" userproperty={this.setUsername} />
                <InputComponent id="password" labelName="Password: " inputType="password" userproperty={this.setPassword} />
                <InputComponent id="firstname" labelName="First Name: " inputType="text" userproperty={this.setFirstName} />
                <InputComponent id="lastname" labelName="Last Name: " inputType="text" userproperty={this.setLastName} />
                <InputComponent id="email" labelName="Email: " inputType="text" userproperty={this.setEmail} />
                <button onClick={this.clickHandler}>Login</button>
                <p>{this.state.message}</p>                
            </div>
        )
    }
}
export default RegisterFormComponent;