export default class AviaSales {

    async getSearchId() {
        const res = await fetch('https://aviasales-test-api.java-mentor.com/search')
        if (!res.ok) throw new Error('Что то пошло не так')
        return await res.json()
    }

    async getTickets(id) {
        const res = await fetch(`https://aviasales-test-api.java-mentor.com/tickets?searchId=${id}`)
        if (!res.ok) throw new Error('Что то пошло не так')
        return await res.json()
    }
}
