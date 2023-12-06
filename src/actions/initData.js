export const initData = {
    boards: [
        {
            id: 'board-1',
            columnOrder: ['column-1', 'column-2', 'column-3'],
            columns: [
                {
                    id: 'column-1',
                    boardId: 'borad-1',
                    title: 'Do zrobienia',
                    cardOrder: [ 'card-1', 'card-2', 'card-3' ],
                    cards: [
                        {
                            id: 'card-1',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 1',
                        },
                        {
                            id: 'card-2',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 2',
                        },
                        {
                            id: 'card-3',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 3',
                        }
                    ]
                },
                {
                    id: 'column-2',
                    boardId: 'borad-1',
                    title: 'W trakcie realizacji',
                    cardOrder: [ 'card-4', 'card-5', 'card-6', 'card-7' ],
                    cards: [
                        {
                            id: 'card-4',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Title of card 4',
                        },
                        {
                            id: 'card-5',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Title of card 5',
                        },
                        {
                            id: 'card-6',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Title of card 6',
                        },
                        {
                            id: 'card-7',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Title of card 7',
                        },

                        {
                            id: 'card-8',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Title of card 8',
                        },

                        {
                            id: 'card-9',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Title of card 9',
                        },

                        {
                            id: 'card-10',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Title of card 10',
                        },

                        {
                            id: 'card-11',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Title of card 11',
                        },
                        {
                            id: 'card-12',
                            boardId: 'board-1',
                            columnId: 'column-2',
                            title: 'Title of card 12',
                        }
                        
                    ]
                },
                {
                    id: 'column-3',
                    boardId: 'borad-1',
                    title: 'Ukończone',
                    cardOrder: [ 'card-8', 'card-9' ],
                    cards: [
                        {
                            id: 'card-8',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Title of card 8',
                        },
                        {
                            id: 'card-9',
                            boardId: 'board-1',
                            columnId: 'column-3',
                            title: 'Title of card 9',
                        }
                    ]
                }
            ]
        }
    ]
}