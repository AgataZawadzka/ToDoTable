import React from "react";
import './Board.scss';

const Card = (props) => {
    const {card} = props;
    return (
        <>
            <li className="card-item">
                {card.title}
            </li>
        </>
    )


}

export default Card;