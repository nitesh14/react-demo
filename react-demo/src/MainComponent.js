import React from 'react';
import PrintNameComponent from './PrintNameComponent';
import HeaderComponent from './HeaderComponent';
import EmployeeComponent from './EmployeeComponent';
import SearchFormComponent from './SearchFormComponent';
import TableComponent from './TableComponent';
import PrintEvenOddComponent from './PrintEvenOddComponent';
import CustomerFilterComponent from './CustomerFilterComponent';

class MainComponent extends React.Component {

    render() {
        // Employee data
        var employee_info = {
            empid: 101,
            name: "Nitesh",
            company: "Yash Technologies"
        }

        // Customer data
        var customers = [
            {id: 1, name : 'John', address: 'USA'},
            {id: 1, name : 'Ajay', address: 'India'},
            {id: 1, name : 'Alice', address: 'UK'}
        ]

        return (
            <div class="row">
                <div class="column">
                    <div id="primary">
                        <PrintNameComponent />
                        <HeaderComponent />
                        <SearchFormComponent />
                        <TableComponent />
                    </div>
                    <div id="employee-section">
                        <h3>Employee Assignment Section</h3>
                        <EmployeeComponent employee={employee_info} />
                    </div>
                </div>
                <div class="column">
                    <div>
                        <h4>Print Even Odd Numbers</h4>
                        <PrintEvenOddComponent />
                    </div>
                </div>
                <div class="column">
                    <div>
                        <h4>Filter Customer</h4>
                        <CustomerFilterComponent customers = {customers}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainComponent;