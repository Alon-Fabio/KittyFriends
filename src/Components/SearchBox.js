import React from 'react';

const SearchBox = ({SearchChange}) => {
    return (
        <div className='pa2'>
            <input 
            className='bg-light-blue dib br3 tc'
            type='search' 
            placeholder='Search Kittens'
            onChange={SearchChange}
            />
        </div>
    );
}
export default SearchBox;