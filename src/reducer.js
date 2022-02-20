const initialState = {
    searchId: '',
    tickets: [],
    ticketsFlag: false,
    filterList: ['Без пересадок'],
    sortFlag: 'discount'
}

const reducer = (state = initialState, {
    payload,
    type
}) => {
    switch (type) {
        case 'SEARCH_ID':
            return {
                ...state, searchId: payload.searchId
            };
        case 'TICKETS':
            return {
                ...state, tickets: state.tickets.concat(payload.tickets), ticketsFlag: payload.tickets.stop
            };
        case 'SORT':
            return {
                ...state, sortFlag: payload
            };
        case 'FILTER':
            return {
                ...state, filterList: payload
            };
        default:
            return state;
    }
}

export default reducer