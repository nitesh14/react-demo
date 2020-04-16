import React from 'react';

class TableComponent extends React.Component {
    render() {
        return (
            <div id="datatable">
                <table border="1">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Scrum Master</th>
                        <th>Team Members</th>
                    </tr>
                    <tr>
                        <td>101
                                <div>
                                <a href="#">Edit</a> |
                                    <a href="#">Delete</a>
                            </div>
                        </td>
                        <td>TCI</td>
                        <td>John</td>
                        <td>12</td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default TableComponent;