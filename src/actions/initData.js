export const initData = {
    boards: [
        {
            id: 'board-1',
            columnOrder: ['column-3', 'column-2', 'column-1'],
            columns: [
                {
                    id: 'column-1',
                    boardId: 'borad-1',
                    title: 'ToDo',
                    cardOrder: [ 'card-1', 'card-2', 'card-3' ],
                    cards: [
                        {
                            id: 'card-1',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title od card 1',
                        },
                        {
                            id: 'card-2',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title od card 2',
                        },
                        {
                            id: 'card-3',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title od card 3',
                        }
                    ]
                },
                {
                    id: 'column-2',
                    boardId: 'borad-1',
                    title: 'In progress',
                    cardOrder: [ 'card-4', 'card-5', 'card-6', 'card-7' ],
                    cards: [
                        {
                            id: 'card-4',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Title od card 4',
                        },
                        {
                            id: 'card-5',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Title od card 5',
                        },
                        {
                            id: 'card-6',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Title od card 6',
                        },
                        {
                            id: 'card-7',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Title od card 7',
                        }
                    ]
                },
                {
                    id: 'column-3',
                    boardId: 'borad-1',
                    title: 'Done',
                    cardOrder: [ 'card-8', 'card-9' ],
                    cards: [
                        {
                            id: 'card-8',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Title od card 8',
                        },
                        {
                            id: 'card-9',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Title od card 9',
                        }
                    ]
                }
            ]
        }
    ]
}
