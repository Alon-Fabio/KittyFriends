import React from 'react';
import Card from './Card';

const CardArray = ({ robots }) => {
<<<<<<< HEAD
    
=======
>>>>>>> 163e4d95d1cb64c7e682b82eadd259299aa846a2
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