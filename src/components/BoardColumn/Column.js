import React from "react";
import Card from "./Card";
import './Board.scss';
import { mapOrder } from "../sorts";
import { Container, Draggable } from "react-smooth-dnd";

const Column = (props) => {

    const {column, onCardDrop} = props;
    const cards = mapOrder(column.cards, column.cardOrder, 'id');


    return (
        <>
                <div className='column'>
                    <header className="column-drag-handle">{column.title}</header>
                    <div className="card-list">
                    <Container
                    groupName="col"
                    onDrop={(dropResult) => onCardDrop(dropResult, column.id)}
                    getChildPayload={index => cards[index]}
                    dragClass="card-ghost"
                    dropClass="card-ghost-drop"
                    dropPlaceholder={{                      
                      animationDuration: 150,
                      showOnTop: true,
                      className: 'card-drop-preview' 
                    }}
                    dropPlaceholderAnimationDuration={200}
                  >
                        {cards && cards.length > 0 && cards.map((card, index) => {
                            return(
                                
                                < Draggable key={card.id}>
                                    <Card card={card}/>
                                </Draggable>
                            )
                        })}
                    </Container>   
                    </div>
                    <footer>
                        <div className="footer-action"></div>
                        <i className="fa fa-plus icon"></i> Dodaj kolejne zadanie
                    </footer>
                    </div>
        </>
    )


}

export default Column;