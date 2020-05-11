import React, { Component } from 'react';
import SearchBox from '../Components/SearchBox';
import CardArray from '../Components/CardList';
import {robots} from '../robots';

class App extends Component {
    constructor() {
        super()
        this.state = {
            kittens: robots,
            SearchField: '',
        }
    }
    onSearchChange = (e) => {
        this.setState({SearchField: e.target.value});
        
    }
    
    render() {
        const kittyFilter = this.state.kittens.filter(kitty =>
            {return kitty.name.toLowerCase().includes(this.state.SearchField.toLowerCase())})
        return (
            <div className='tc'>
                <h1>KittyFriends</h1>
                <SearchBox SearchChange = {this.onSearchChange}/>
                <CardArray robots={kittyFilter} />
            </div>
        );
    }
}

export default App;