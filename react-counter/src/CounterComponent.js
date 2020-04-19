import React from 'react';
import CounterPageComponent from './CounterPageComponent';

class CounterComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        console.log("Increment");
        this.setState({
            count: this.state.count + 1
        });
    };

    decrementCount = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {
        let { count } = this.state;
        return (
            <div>
                <CounterPageComponent count={count}
                    incrementCount={this.incrementCount}
                    decrementCount={this.decrementCount} />
            </div>
        );
    }
}
export default CounterComponent;