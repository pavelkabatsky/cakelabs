import React from 'react';

const EventPage = (props) => {
    
    if(!props.eventData) {
      return <div>Данных нет</div>  
    }

    return (
        <div>
            <h2>{props.eventData.name}</h2>
            <img src={props.eventData.imageUrl} alt="events" />
            <p>{props.eventData.body}</p>
        </div>
    )
}

export default EventPage;