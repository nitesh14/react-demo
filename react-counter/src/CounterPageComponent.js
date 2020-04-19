import React from 'react';

class CounterPageComponent extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="column">
                    <h1>Counter</h1>
                    <h3>Count : {this.props.count}</h3>
                    <button onClick={(event) => {
                        event.stopPropagation();
                        this.props.incrementCount()
                    }}>Increase</button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={(event) => {
                        event.stopPropagation();
                        this.props.decrementCount()
                    }}>Decrease</button>
                </div>
            </div>
        )
    }

}
export default CounterPageComponent;