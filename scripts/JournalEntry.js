//responsible for rendering a single journal entry

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