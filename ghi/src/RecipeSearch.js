import React, { Component } from 'react'

class Search extends Component {
    state = {
        query: '',
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }

    render() {
        return (
            <>
                <form class="d-flex" action="/search/">
                    <input
                        placeholder="Search for..."
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                    />
                    <p>{this.state.query}</p>
                </form>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </>

        )
    }
}

export default Search
