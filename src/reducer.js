const initialState = {
    searchId: '',
    tickets: [],
    filterList: ['Без пересадок'],
    sortFlag: 'discount'
}

const reducer = (state = initialState, {payload, type}) => {
    switch (type) {
        case 'SEARCH_ID':
            state.searchId = payload.searchId;
            return state
        case 'TICKETS':
            state.tickets = payload.tickets;
            return state
        case 'SORT':
            state.sortFlag = payload;
            return state
        case 'FILTER':
            state.filterList = payload;
            return state
        default:
            return state
    }
}

export default reducer