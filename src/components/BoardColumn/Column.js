import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import './Board.scss';
import { mapOrder } from "../sorts";
import { Container, Draggable } from "react-smooth-dnd";
import Dropdown from 'react-bootstrap/Dropdown';
import ConfirmModal from "../Common/Modal";
import Form from 'react-bootstrap/Form';
import { MODAL_ACTION_CLOSE, MODAL_ACTION_CONFIRM } from '../constant';
import { v4 as uuidv4 } from 'uuid';

const Column = (props) => {

    const {column, onCardDrop, onUpdateColumn} = props;
    const cards = mapOrder(column.cards, column.cardOrder, 'id');

    const [isShowModalDelete, setShowModalDelete] = useState(false);
    const toggleModal = () => {
        setShowModalDelete(!isShowModalDelete)
    }
    const [titleColumn, setTitleColumn] = useState("");

    const [isFirstClick, setIsFirstClick] = useState(true);
    const inputRef = useRef(null);

    const [isShowAddNewCard, setIsShowAddNewCard] = useState(false);
    const [valuetextArea, setValueTextArea] = useState("");
    const textAreaRef = useRef(null);

    useEffect(()=> {
        if(isShowAddNewCard === true && textAreaRef && textAreaRef.current){
            textAreaRef.current.focus();
        }
    }, [isShowAddNewCard])

    useEffect(() => {
        if(column && column.title){
            setTitleColumn(column.title)
        }
    }, [column])

    
    const onModalAction = (type) => {
        toggleModal();
        if (type === MODAL_ACTION_CLOSE) {

        }
        if(type === MODAL_ACTION_CONFIRM){
            const newColumn = {
                ...column,
                _destroy: true,
            }
            onUpdateColumn(newColumn)
        }
    }

    const selectText = (event) => {
        setIsFirstClick(false);
        if (isFirstClick) {
            event.target.select();
        } else {
            inputRef.current.setSelectionRange(titleColumn.length, titleColumn.length);
        }
        // event.target.focus();

    }

    const handleClickOutside = () => {
        setIsFirstClick(true);

        const newColumn = {
            ...column,
            title: titleColumn,
            _destroy: false
        }
        onUpdateColumn(newColumn)
        
    }

    const handleAddNewCard = () => {
        if(!valuetextArea) {
            textAreaRef.current.focus();
            return;
        }

        const newCard = {
            id: uuidv4(),
            boardId: column.boardId,
            columnId: column.id,
            title: valuetextArea
        }

        let newColumn = { ...column};
        newColumn.cards = [...newColumn.cards, newCard];
        newColumn.cardOrder = newColumn.cards.map(card => card.id);

        onUpdateColumn(newColumn);
        setValueTextArea("");
        setIsShowAddNewCard(false);

    }

    return (
        <>
                <div className='column'>
                    <header className="column-drag-handle">
                        <div className="column-title">
                        <Form.Control
                            size={"sm"}
                            type={"text"}
                            value={titleColumn}
                            className="title-input"
                            onClick={selectText}
                            onChange={(event) => setTitleColumn(event.target.value)}
                            spellCheck="false"
                            onBlur={handleClickOutside}
                            onMouseDown={(e) => e.preventDefault()}
                            ref={(inputRef)}
                        />
                        </div>
                        <div className="column-dropdown">
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic" size="sm">
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {/* <Dropdown.Item href="#">Dodaj zadanie</Dropdown.Item> */}
                                <Dropdown.Item onClick={toggleModal}>Usuń kolumnę</Dropdown.Item>
                                {/* <Dropdown.Item href="#">Something else</Dropdown.Item> */}
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>
                    </header>
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
                    
                    {isShowAddNewCard === true &&
                        <div className="new-card">
                            <textarea 
                                rows="2"
                                className="form-control"    
                                placeholder="Wpisz nazwę zadania..."    
                                ref={textAreaRef}
                                value={valuetextArea}
                                onChange={(event) => setValueTextArea(event.target.value)}
                            >
                            </textarea>
                            <div>
                                <button className="add-button" onClick={()=> handleAddNewCard()}>Dodaj</button>
                                <i className="fa fa-times close" onClick={()=> setIsShowAddNewCard(false)}/>
                            </div>
                        </div>
                    }
                    </div>
                    {isShowAddNewCard === false &&
                    <footer>
                        <div className="footer-action"onClick={()=> setIsShowAddNewCard(true)}>
                            <i className="fa fa-plus icon"></i> Dodaj kolejne zadanie
                        </div>
                    </footer>
                    }
                </div>
                <ConfirmModal
                    show={isShowModalDelete}
                    title={"Usuń kolumnę"}
                    content={'Na pewno chcesz usunąć kolumnę?'}
                    onAction={onModalAction}
                />
        </>
    )


}

export default Column;