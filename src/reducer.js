const initialState = {
    searchId: '735e5969f6d26a4b49bbfa614bd6d88b',
    tickets: [],
    filterList: [],
    sortFlag: ''
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'SEARCH_ID':
            state.searchId = actions.id.searchId;
            return state
        case 'TICKETS':
            state.tickets = actions.tickets.tickets;
            return state
        case 'SORT':
            state.sortFlag = actions.sortFlag;
            return state
        case 'FILTER':
            state.filterList = actions.filterList;
            return state
        default:
            return state
    }
}

export default reducer