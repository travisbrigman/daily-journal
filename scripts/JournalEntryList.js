//responsible for rendering a list of entry components

/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".entryLog")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    
    getJournalEntries().then( () => { 
        const entries = useJournalEntries()
        entryLog.innerHTML += `
            ${entries.map(entry => JournalEntryComponent(entry)).join("")
            }
        `
    } 
    )
}
