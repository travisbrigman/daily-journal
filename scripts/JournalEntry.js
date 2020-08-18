//responsible for rendering a single journal entry

import { saveJournalEntry } from "./JournalDataProvider.js";

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
    <div class= "mood-title"> ${entry.mood.label} <div>
    <div class= "instructor-title"> ${entry.instructor.first_name} ${entry.instructor.last_name} <div>
    <button id="deleteEntry--${entry.id}">Delete</button>

        </section>
    `;
};

const eventHub = document.querySelector(".main");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "save-button") {

    const entryDate = document.querySelector("#today");
    const entryConcepts = document.querySelector("#concepts");
    const entryText = document.querySelector("#journal-text");
    const entryMood = document.querySelector("#mood")
    const entryInstructor = document.querySelector("#instructor")
    
    
      const newEntry = {
        date: entryDate.value,
        concept: entryConcepts.value,
        entry: entryText.value,
        moodId: parseInt(entryMood.value),
        instructorId: parseInt(entryInstructor.value)
      };
      saveJournalEntry(newEntry)
  }
});
