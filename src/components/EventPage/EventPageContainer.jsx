import React from 'react';
import EventPage from './EventPage';
import { connect } from 'react-redux';
import {getEventData} from './../../redux/eventsReducer'

class EventPageContainer extends React.Component {

    componentDidMount() {
        let eventId = +(this.props.match.params.id);
        this.props.getEventData(eventId);
    }

    // componentDidUpdate() {
    //     let eventId = +(this.props.match.params.id);
    //     this.props.getEventData(eventId);
    // }

    render() {
        return <EventPage eventData = {this.props.eventData}/>
    }
}

const mapStateToProps = (state) => {
    return {
        eventData : state.events.eventData
    }
}

export default connect(mapStateToProps , {getEventData})(EventPageContainer);