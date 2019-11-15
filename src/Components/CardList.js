import React from 'react';
import Card from './Card';

const CardArray = ({ robots }) => {
    if (true) {
        return Error('shiiit');
    }
    return (
        <div>
            {
                robots.map((robot, i) => {
                    return (
                        <Card
                        key={'rob'+i}
                         id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                        />
                    )
                })
            }
        </div>
    );
}

export default CardArray;