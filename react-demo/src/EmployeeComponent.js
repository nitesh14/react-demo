import React from 'react';

class EmployeeComponent extends React.Component {
    render() {
        return (
            <div id="employee-table">
                <table border="1">
                    <tr>
                        <th>EmpId</th>
                        <th>Name</th>
                        <th>Company</th>
                    </tr>
                    <tr>
                        <td>{this.props.employee.empid}</td>
                        <td>{this.props.employee.name}</td>
                        <td>{this.props.employee.company}</td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default EmployeeComponent;