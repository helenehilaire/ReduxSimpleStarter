import React, { Component } from "react";

// Functional Component example
// const SearchBar = () => {
//     return <input />
// };

// Class Base Component example
class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: ""};
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={ event => this.setState({ term: event.target.value }) } />
            </div>
        );
    }
}

export default SearchBar;