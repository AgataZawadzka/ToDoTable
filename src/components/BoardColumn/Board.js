import React from "react";
import Column from "./Column.js";
import './Board.scss';
import { initData } from '../../actions/initData';
import { useState, useEffect, useRef } from "react";
import _ from 'lodash';
import {mapOrder} from '../sorts.js';
import { Container, Draggable } from "react-smooth-dnd";
import { applyDrag } from "../dragDrop.js";
import { v4 as uuidv4 } from 'uuid';

const Board = () => {
    const [board, setBoard] = useState({});
    const [columns, setColumns] = useState([]);

    const [isShowAddColumn, setIsShowAddColumn] = useState(false);
    const inputRef = useRef(null);
    const [valueInput, setValueInput] = useState("");

    useEffect(() => {
        if(isShowAddColumn === true && inputRef && inputRef.current){
            inputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        const boardInitData = initData.boards.find(item => item.id === 'board-1')
        if(boardInitData){
            setBoard(boardInitData);


            setColumns(mapOrder(boardInitData.columns, boardInitData.columnOrder, 'id'))
        }
    }, []);

    const onColumnDrop = (dropResult) =>{
        let newColumns = [...columns];
        newColumns = applyDrag(newColumns, dropResult);

        let newBoard = { ...board };
        newBoard.columnOrder = newColumns.map(column => column.id);
        newBoard.columns = newColumns;

        setColumns(newColumns);
        setBoard(newBoard);
    }

    const onCardDrop = (dropResult, columnId) => {
        if(dropResult.removedIndex !== null || dropResult.addedIndex !== null){

            let newColumns = [...columns];

            let currentColumn = newColumns.find(column => column.id === columnId);
            currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
            currentColumn.cardOrder = currentColumn.cards.map(card => card.id);

            setColumns(newColumns);

        }
    }

    if(_.isEmpty(board)) {
        return (
            <>
                <div className="not-found">Brak zadań</div>
            </>
        )
    }

    const handleAddColumn = () => {
        if(!valueInput){
            if(inputRef && inputRef.current)
                inputRef.current.focus();
            return;
        }

        const _columns = _.cloneDeep(columns);
        _columns.push({
            id: uuidv4(),
            boardId: board.id,
            title: valueInput,
            cards: []
        });

        setColumns(_columns);
        setValueInput("");
        inputRef.current.focus();

    } 


    const onUpdateColumn = (newColumn) => {
       const columnIdUpdate = newColumn.id;
       let ncols = [...columns];
       let index = ncols.findIndex(item => item.id === columnIdUpdate);
       if(newColumn._destroy){
        ncols.splice(index, 1);

        } else {
            ncols[index] = newColumn;
       }
       setColumns(ncols);
    }

    return (
        <>
            <div class="columns">

            <Container
                orientation="horizontal"
                onDrop={onColumnDrop}
                getChildPayload={index => columns[index]} 
                dragHandleSelector=".column-drag-handle"
                dropPlaceholder={{
                    animationDuration: 150,
                    showOnTop: true,
                    className: 'column-drop-preview'
                }}
            >

                {columns && columns.length > 0 && columns.map((column, index) => {
                    return (

                       < Draggable key={column.id}>
                        <Column
                            column={column}
                            onCardDrop={onCardDrop}
                            onUpdateColumn={onUpdateColumn}
                        />
                        </Draggable>
                    )
                })}
            </Container>
                {isShowAddColumn === false ? 
                        <div className="add-new-column" onClick={() => setIsShowAddColumn(true)}>
                        <i className="fa fa-plus icon"></i> Dodaj kolejną kolumne
                    </div>
                    :
                    <div className="content-add-column">
                        <input type="text" 
                            className="form-control" 
                            placeholder="Nazwa kolumny..." 
                            ref={inputRef}
                            value={valueInput}
                            onChange={(event)=> setValueInput(event.target.value)}
                        />
                        <div>
                        <button className="add-button" onClick={() => handleAddColumn()}>Dodaj</button>
                        <i className="fa fa-times close"onClick={() => setIsShowAddColumn(false)}/>
                        </div>
                    </div>
                }
            </div>
        </>
        
    )


}

export default Board;