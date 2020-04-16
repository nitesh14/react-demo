import React from 'react';
class SearchFormComponent extends React.Component {
    render() {
        return (
            <div id="search-form">
                <form>
                    <table>
                        <tr>
                            <td><input type="text" name="search-from" />&nbsp; <button type="submit">Search</button></td>
                        </tr>
                    </table>
                </form>
            </div>
        )
    }
}
export default SearchFormComponent;