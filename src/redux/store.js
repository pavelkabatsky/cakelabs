import { createStore, combineReducers } from "redux";
import eventsReducer from './eventsReducer'


let reducers = combineReducers({
    events : eventsReducer
});

let store = createStore(reducers);

window.store = store;

export default store;