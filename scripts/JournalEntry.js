//responsible for rendering a single journal entry

/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
    <h1>${ "concept covered" }<h1>
    <article>
        ${}
    </article>
    <div> ${} <div>

        </section>
    `
}