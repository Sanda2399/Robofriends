import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardComponent = robots.map((curItem) => {
        return <Card 
        key={curItem} 
        id={curItem.id} 
        name={curItem.name} 
        email={curItem.email}
        />
    })
   return ( 
    <div>
        {cardComponent}
    </div>);
}
export default CardList;