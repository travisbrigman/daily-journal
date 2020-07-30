let journal = []

export const getJournalEntries = () => {
    
    return fetch("http://localhost:3000/journal")
    .then(response => response.json())
    .then(ParsedEntries => {
        journal = ParsedEntries
    })

}

export const saveJournalEntry = entry => {
    return fetch('http://localhost:3000/journal', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getJournalEntries)
    //.then(dispatchStateChangeEvent)
}


export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}