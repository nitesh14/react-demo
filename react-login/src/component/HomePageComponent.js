import React from 'react';
import LoginContentComponent from './LoginContentComponent';
import RegisterContentComponent from './RegisterContentComponent';

class HomePageComponent extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="column">
                    <h2>Login</h2>
                    <LoginContentComponent />
                </div>
                <div className="column">
                    <h2>Register</h2>
                    <RegisterContentComponent/>
                </div>
            </div>
            
        )
    }
}
export default HomePageComponent;