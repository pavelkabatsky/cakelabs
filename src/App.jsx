import React from 'react';
import style from './App.module.css';
import EventsListContainer from './components/EventsList/EventsListContainer';
import { Route, Switch } from 'react-router-dom';
import EventPageContainer from './components/EventPage/EventPageContainer';
import FavoritesContainer from './components/Favorites/FavoritesContainer';
import Header from './components/Header/Header';


const App = () => {
	return (
		<div className={style.container}>
			<Header/>
			<div className={style.mainWrap}>
				<Switch>
					<Route exact path='/' component = {EventsListContainer}/>
					<Route path='/events/:id' component = {EventPageContainer}/>
					<Route path='/favorites' component = {FavoritesContainer}/>
				</Switch>
				
			</div>
		</div>
		
	);
}



export default App;
