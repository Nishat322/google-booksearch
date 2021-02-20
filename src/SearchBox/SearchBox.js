import React, { Component } from 'react'

import './SearchBox.css'

class SearchBox extends Component {
    render() { 
        return (  
            <div className = 'SearchBox'>
                <label htmlFor = 'searchTerm'>Search:  </label>
                <input type = 'text' id = 'searchTerm' name = 'searchTerm' placeholder = 'searchTerm'/>
            </div>
        )
    }
}
 
export default SearchBox;