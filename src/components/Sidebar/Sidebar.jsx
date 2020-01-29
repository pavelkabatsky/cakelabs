import React from 'react';
import style from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {

    const sortByPriceUpHandle = () => {
        props.sortByPriceUp();
    }
    const sortByPriceDownHandle = () => {
        props.sortByPriceDown();
    }

    const filterHandle = (event) => {
        props.setFilter(event.target.value);
    }

    return (
        <aside className = {style.sidebar}>
            <h4>Сортировать по: </h4>
            <div>
                <input name='sortByPrice' type='radio' id='priceUp' onChange={sortByPriceUpHandle}/>
                <label htmlFor='priceUp'>По увеличению цены</label>
            </div>
            <div>
                <input name='sortByPrice' type='radio' id='priceDown' onChange={sortByPriceDownHandle}/>
                <label htmlFor='priceDown'>По уменьшению цены</label>
            </div>
            <h4>Выбрать категорию: </h4>
            <div>
                <select name="categories" onChange={filterHandle}>
                    <option value="default">Выберите...</option>
                    <option value="cinema">Кино</option>
                    <option value="entertainment">Развлечения</option>
                    <option value="theater">Театр</option>
                    <option value="concert">Концерты</option>
                    <option value="festival">Фестивали</option>
                </select>
            </div>
        </aside>
    )
}

export default Sidebar;