import React from "react";
import './Board.scss';

const Card = (props) => {
    const {card} = props;
    return (
        <>
            <div className="card-item">
                <p>{card.title}</p>
            </div>
        </>
    )


}

export default Card;