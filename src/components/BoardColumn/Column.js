import React from "react";
import Card from "./Card";
import './Board.scss';
import { mapOrder } from "../sorts";

const Column = (props) => {

    const {column} = props;
    const cards = mapOrder(column.cards, column.cardOrder, 'id');
    return (
        <>
                <div className='column'>
                    <header>{column.title}</header>
                    <ul className="card-list">
                        {cards && cards.length > 0 && cards.map((card, index) => {
                            return(
                                <Card key={card.id} card={card}/>
                            )
                        })}
                    </ul>
                    <footer>Dodaj kolejne zadanie</footer>
                    </div>
        </>
    )


}

export default Column;