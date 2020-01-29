import React from 'react';
import EventItem from '../EventItem/EventItem';

const Favorites = (props) => {
    
    const favoritesElements = props.eventItems.filter(item => item.isFavorite).map(eventItem => {
        return <EventItem 
                    key={eventItem.id} 
                    eventData = {eventItem} 
                    addToFavorites={props.addToFavorites}
                    deleteFavorites={props.deleteFavorites}
                />
    })
    
    if(!favoritesElements.length) { return <div> Нет избранных событий</div>}
    return (
        <div>
            <h2>Избранное:</h2>
            {favoritesElements}
        </div>)
}

export default Favorites;