export const setSearchId = id => {
    return {
        type: 'SEARCH_ID',
        payload: id
    }
}

export const setTickets = tickets => {
    return {
        type: 'TICKETS',
        payload: tickets
    }
}

export const setSortFlag = flag => {
    return {
        type: 'SORT',
        payload: flag
    }
}

export const setFilterList = list => {
    return {
        type: 'FILTER',
        payload: list
    }
}