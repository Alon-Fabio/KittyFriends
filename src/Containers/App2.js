import React, { useState, useEffect  } from 'react';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import CardArray from '../Components/CardList';

const App = () => {

    const [Kittens, setKittens] = useState([]);
    const [SearchField, setSearchField] = useState('');
    
    //This function is for the onChange call to SearchBox.
    function onSearchChange(e) {
        setSearchField(e.target.value);
    }

    //This function is for the useEffect.
    async function myUsers() { await 
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(myUsers=> myUsers.json())
        .then(Users=>setKittens(Users))
        .catch(err=>console.error(err))
    }

    useEffect(() => {
        myUsers();
    },[SearchField] )

    //Filtering the input from the SearchField.
    const kittyFilter = Kittens.filter(kitty =>{
            return kitty.name.toLowerCase().includes(SearchField.toLowerCase())
        })
    if (Kittens.length === 0) {
        return <h1 className='tc'>loading, please wait</h1>
    } else {
        return (
            <div className='tc'>
                <h1>KittyFriends</h1>
                <SearchBox SearchChange = {onSearchChange}/>
                <Scroll>
                    <CardArray robots={kittyFilter} />
                </Scroll>
            </div>
        );
    }
}

export default App;
