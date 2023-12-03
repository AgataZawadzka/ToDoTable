import React from "react";
import Card from "./Card";
import './Board.scss';

const Column = (props) => {

    const {column} = props;
    return (
        <>
                <div className='column'>
                    <header>{column.title}</header>
                    <ul className="card-list">
                        <Card/>
                    </ul>
                    <footer>Dodaj kolejne zadanie</footer>
                    </div>
        </>
    )


}

export default Column;