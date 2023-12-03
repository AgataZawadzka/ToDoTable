import React from "react";
import Column from "./Column.js";
import './Board.scss';
import { initData } from '../../actions/initData';
import { useState, useEffect } from "react";
import _ from 'lodash';
import {mapOrder} from '../sorts.js';
import { Container, Draggable } from "react-smooth-dnd";

const Board = () => {
    const [board, setBoard] = useState({});
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        const boardInitData = initData.boards.find(item => item.id === 'board-1')
        if(boardInitData){
            setBoard(boardInitData);


            setColumns(mapOrder(boardInitData.columns, boardInitData.columnOrder, 'id'))
        }
    }, []);

    const onColumnDrop = (dropResult) =>{
        console.log('>>> inside onColumnDrop', dropResult)
    }

    if(_.isEmpty(board)) {
        return (
            <>
                <div className="not-found">Brak zadań</div>
            </>
        )
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
                        />
                        </Draggable>
                    )
                })}
            </Container>
            </div>
        </>
        
    )


}

export default Board;