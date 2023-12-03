import React from "react";
import Column from "./Column.js";
import './Board.scss';
import { initData } from '../../actions/initData';
import { useState, useEffect } from "react";
import _ from 'lodash';

const Board = () => {
    const [board, setBoard] = useState({});
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        const boardInitData = initData.boards.find(item => item.id === 'board-1')
        if(boardInitData){
            setBoard(boardInitData);

            boardInitData.columns.sort((a,b) =>
                boardInitData.columnOrder.indexOf(a.id) - boardInitData.columnOrder.indexOf(b.id))
            setColumns(boardInitData.columns)
        }
    }, []);

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
                {columns && columns.length > 0 && columns.map((column, index) => {
                    return (
                        <Column
                            key={column.id}
                            column={column}
                        />
                    )
                })}

            </div>
        </>
        
    )


}

export default Board;