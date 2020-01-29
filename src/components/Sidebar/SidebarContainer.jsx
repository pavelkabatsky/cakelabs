import React from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import {sortByPriceUp,sortByPriceDown, setFilter} from './../../redux/eventsReducer'


const SidebarContainer = (props) => {
    return <Sidebar 
                sortByPriceUp={props.sortByPriceUp} 
                sortByPriceDown={props.sortByPriceDown}
                setFilter={props.setFilter}
            />
}
const mapStateToProps = (state) => {
    return {

    }
}
export default connect(mapStateToProps, {sortByPriceUp,sortByPriceDown,setFilter})(SidebarContainer);