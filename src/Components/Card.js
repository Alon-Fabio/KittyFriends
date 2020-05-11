import React from 'react';
import './Card.css';

const Card = ({id, name, email}) => {
    return (
        //The styls that are implemented in this div are short hand enabled by tachyons.
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img alt='profile' src={`https://robohash.org/${id}?size=200x200&set=set4`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    );
}
//'React.memo()' tells the console that this function should only reload if one of the props change.
export default React.memo(Card);