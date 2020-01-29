import React from 'react';
import style from './EventItem.module.css';
import { NavLink } from 'react-router-dom';

const EventItem = (props) => {

    const toggleFavoritesHandle = () => {
        if(props.eventData.isFavorite) {
            props.deleteFavorites(props.eventData.id, false)
        } else {
            props.addToFavorites(props.eventData.id, true)
        }
        
    }

    return (
        <div className={style.eventItem}>
            <img src={props.eventData.imageUrl} alt="Event" />
            <div className={style.eventItem__content}>
                <div className={style.eventItem__header}>
                    <NavLink to={'/events/' + props.eventData.id}>
                        <h3>{props.eventData.name}</h3>
                    </NavLink>
                    <div className={style.eventItem__price}>{props.eventData.price ? props.eventData.price + ' руб.' : 'Бесплатно'} </div>
                </div>
                <div className={style.eventItem__desc}>
                    {props.eventData.descriprion}
                </div>
                <div className={style.eventItem__favorites} onClick={toggleFavoritesHandle}>
                    {props.eventData.isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
                </div>
            </div>
        </div>
    )
}

export default EventItem;