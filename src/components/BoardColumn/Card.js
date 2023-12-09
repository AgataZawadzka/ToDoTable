import React from "react";
import './Board.scss';

const Card = ({ card, onRemoveCard }) => {
    return (
        <div className="card-item">
            <p>{card.title}</p>
            <div className="card-remove" onClick={onRemoveCard}>
                <i className="fa fa-times"></i>
            </div>
        </div>
    );
}

export default Card;