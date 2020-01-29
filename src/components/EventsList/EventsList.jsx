
import React from 'react';
import EventItem from '../EventItem/EventItem';
import SidebarContainer from '../Sidebar/SidebarContainer';

const EventsList = (props) => {
	
	let eventsList = props.eventsList.map( eventItem => {
		return <EventItem 
					key={eventItem.id} 
					eventData = {eventItem} 
					addToFavorites={props.addToFavorites}
					deleteFavorites={props.deleteFavorites}
				/>
	});

	let filteredList = [];
	if(props.activeFilter || props.activeFilter ==='default') {
		 filteredList = eventsList.filter( item => {
			return item.props.eventData.categories.indexOf(props.activeFilter) >=0
		})
	}

	return (
		<>
			<div className='eventsWrap'>
				<h1>Список событий в вашем городе:</h1>
				{filteredList.length > 0 ? filteredList : eventsList}
			</div>
			<SidebarContainer/>
		</>
	)
}

export default EventsList;

