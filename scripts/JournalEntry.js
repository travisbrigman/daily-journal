//responsible for rendering a single journal entry

import { saveJournalEntry } from "./JournalDataProvider.js"

/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
    <h1 class= "journal-box-title">${entry.concept}<h1>
    <article id= "journal-text" class= "journal-box, journal-box-background">
        ${entry.entry}
    </article>
    <div class= "mood-title"> ${entry.mood} <div>

        </section>
    `
}

const eventHub = document.querySelector(".main")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "save-button") {
        const entryDate = document.querySelector("#calendar")
        const entryConcepts = document.querySelector("#concepts")
        const entryText = document.querySelector("#journal-text")
        const entryMood = document.querySelector("#mood")

        const newEntry = {
            date: entryDate.value,
            concept: entryConcepts.value,
            entry: entryText.value,
            mood: entryMood.value
        }
        debugger
        saveJournalEntry(newEntry)
    }
})