import React from 'react';

class CustomerFilterComponent extends React.Component {
    
    render() {
        return(
            <ul>
                {
                    this.props.customers.filter(function(customer){
                        return customer.name.startsWith("A") && customer.address === 'India';
                    }).map(function(customer){
                        return <li>{customer.name}</li>
                    })
                }
            </ul>
        )
    }
}
export default CustomerFilterComponent;