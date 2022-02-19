export const setSearchId = id => {
    return {
        type: 'SEARCH_ID',
        id
    }
}

export const setTickets = tickets => {
    return {
        type: 'TICKETS',
        tickets
    }
}

export const setSortFlag = flag => {
    return {
        type: 'TICKETS',
        flag
    }
}

export const setFilterList = list => {
    return {
        type: 'FILTER',
        list
    }
}