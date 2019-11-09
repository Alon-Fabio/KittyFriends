import React from 'react';
import SearchBox from './SearchBox';
import CardArray from './CardList';
import {robots} from './robots';

const App = () => {
    return (
        <div>
            <h1>KittyFriends</h1>
            <SearchBox />
            <CardArray robots={robots}/>
        </div>
    );
}

export default App;