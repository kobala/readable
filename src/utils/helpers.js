import escapeRegExp from 'escape-string-regexp'

export function guid () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1)
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4()
}

export function formatDate(timestamp) {
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ]

    const date = new Date(timestamp);

    return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`
}

export function getFilteredList (list, filterProps) {
    list = list.filter(listItem => !listItem.deleted)

    const { sorting, keyword } = filterProps

    switch(sorting){
        case 'vote_desc' :
            list = list.sort((a, b) => b.voteScore > a.voteScore)
            break
        case 'vote_asc' :
            list = list.sort((a, b) => b.voteScore < a.voteScore)
            break
        case 'date_desc' :
            list = list.sort((a, b) => b.timestamp > a.timestamp)
            break
        case 'date_asc' :
            list = list.sort((a, b) => b.timestamp < a.timestamp)
            break
        default :
            break
    }

    if(keyword){
        const match = new RegExp(escapeRegExp(keyword), 'i')

        list = list.filter(listItem => match.test(listItem.title) || match.test(listItem.body) || match.test(listItem.author))
    }

    return list
}
