import React from 'react';

class PrintEvenOddComponent extends React.Component {
    render() {
        var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        return (
            <div><h5>Even Numbers</h5>
                <ul>
                    {
                        values.map(function (value) {
                            var number = value % 2 === 0 ? value : 0
                            if (number != 0) {
                                return <li>{value}</li>
                            }
                        })
                    }
                </ul>

                <h5>Odd Numbers</h5>
                <ul>
                    {
                        values.map(function (value) {
                            var number = (value % 2) === 0 ? 0 : value
                            if (number != 0) {
                                return <li>{value}</li>
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default PrintEvenOddComponent;