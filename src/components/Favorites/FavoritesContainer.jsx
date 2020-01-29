import React from 'react';
import Favorites from './Favorites';
import { connect } from 'react-redux';
import {addToFavorites,deleteFavorites} from './../../redux/eventsReducer';

const FavoritesContainer = (props) => {
    return <Favorites eventItems={props.eventItems} 
                    addToFavorites={props.addToFavorites}
                    deleteFavorites={props.deleteFavorites}/>
}

const mapStateToProps = (state) => {
    return {
        eventItems : state.events.eventsItems
    }
}

export default connect(mapStateToProps, {addToFavorites,deleteFavorites})(FavoritesContainer);