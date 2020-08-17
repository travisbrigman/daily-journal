//responsible for rendering a list of entry components

/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
const eventHub = document.querySelector(".main");

import { useJournalEntries, getJournalEntries, deleteEntry } from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".entryLog");

export const EntryListComponent = () => {
  // Use the journal entry data from the data provider component
  
  getJournalEntries().then(() => {
    const entries = useJournalEntries();
    render(entries)
  });
}
  
  const render = (arrayOfEntries)  => {
    entryLog.innerHTML = `
            ${arrayOfEntries.map((entry) => JournalEntryComponent(entry)).join("")}
        `;
  };

eventHub.addEventListener("entryStateChanged", () => {
  const latestEntries = useJournalEntries();
render(latestEntries)
  })

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        console.log(id)

       deleteEntry(id).then(
           () => {
            const latestEntries = useJournalEntries();
               render(latestEntries)
           }
       )
    }
})