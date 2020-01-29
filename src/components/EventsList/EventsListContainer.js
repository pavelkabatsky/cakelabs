import React from 'react';
import EventsList from './EventsList';
import { connect } from 'react-redux';
import {addToFavorites,deleteFavorites} from './../../redux/eventsReducer'

class EventsListContainer extends React.Component {

    render() {
        

        return (
            <EventsList 
                eventsList = {this.props.eventsList} 
                addToFavorites={this.props.addToFavorites}
                deleteFavorites={this.props.deleteFavorites}
                activeFilter={this.props.activeFilter}
            />
        )
    }
}

const mapStateToProps = (state) => {

    return {
        eventsList : state.events.eventsItems,
        activeFilter : state.events.activeFilter
    }
}

export default connect(mapStateToProps, {addToFavorites,deleteFavorites})(EventsListContainer);