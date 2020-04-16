import React from 'react';
import LogoComponent from './LogoComponent'

class HeaderComponent extends React.Component {
    render() {
        return (
            <div id="header">
                <div id="logo">
                    <LogoComponent/>
                </div>
                <div id="navigation">
                    <a href="#">Home</a> |
                    <a href="#">About</a> |
                    <a href="#">Service</a> |
                    <a href="#">Contact</a> |
                </div>
            </div>
        )
    }
}
export default HeaderComponent;