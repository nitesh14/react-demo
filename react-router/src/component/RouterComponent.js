import React from 'react';
import '../index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePageComponent from './HomePageComponent';
import ContactPageComponent from './ContactPageComponent';
import AboutPageComponent from './AboutPageComponent';
import LinksComponent from './LinksComponent';

class RouterComponent extends React.Component {
    render() {
        return (
            <Router>
                <div className="row">
                    <section className="col-sm-2"></section>
                    <section className="col-sm-8">
                        <LinksComponent />
                        <Route exact path="/" component={HomePageComponent}></Route>
                        <Route path="/about" component={AboutPageComponent}></Route>
                        <Route path="/contact" component={ContactPageComponent}></Route>
                    </section>
                </div>
            </Router>
        )
    }
}
export default RouterComponent;