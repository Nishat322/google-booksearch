import React, { Component } from 'react'

import SearchBox from '../SearchBox/SearchBox'
import './SearchBar.css'

class SearchBar extends Component {
    render() { 
        return (  
            <div className = 'SearchBar'>
                <div className = 'SearchBarHeading'>
                    <h1> Google Book Search </h1>
                </div>
                <form>
                    <div className = 'SearchBarControls'>
                        <SearchBox searchTerm = {this.props.searchTerm}/>
                        <FilterOptions filterOption = {this.props.option}/>
                    </div>
                </form>
            </div>
        )
    }
}
 
export default SearchBar;