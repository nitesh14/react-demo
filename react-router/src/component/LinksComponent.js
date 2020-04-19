import React from 'react';
import { NavLink } from 'react-router-dom';

class LinksComponent extends React.Component {
    render() {
        return (
            <div className="list-group">
                <NavLink className="list-group-item" exact activeClassName="active" to="/">Home</NavLink>
                <NavLink className="list-group-item" exact activeClassName="active" to="/about">About</NavLink>
                <NavLink className="list-group-item" exact activeClassName="active" to="/contact">Contact</NavLink>
            </div>
        )
    }
}
export default LinksComponent;