
const contentTarget = document.querySelector(".entryForm")

export const JournalFormComponent = () => {

contentTarget.innerHTML = `
<form class="journal-form">
<fieldset class="date-picker">
    <label>Date of Entry</label>
    <input type="datetime-local" id="calendar" placeholder="yyyy-mm-dd" name="journal-entry-date">
</fieldset>

<fieldset class="concepts-covered">
    <label>Concepts Covered</label>
    <input type="text" id="concepts" required size="12" placeholder="concept">
</fieldset>

<fieldset class="journal-box">
    <label class="journal-box-title">Journal Entry</label>
    <textarea class="journal-box-background" id="journal-text" name="journal-text" placeholder="journal entry" rows="8" cols="40"></textarea>
</fieldset>

<fieldset class="mood-dropdown">
    <label class="mood-title">Mood for the day</label>
    <select name="mood" id="mood">
        <option value="Happy">Happy</option>
        <option value="Sad">Sad</option>
        <option value="Focused">Focused</option>
        <option value="Angry">Angry</option>
        <option value="Solemn">Solemn</option>
    </select>
</fieldset>
</form>
 <input id="save-button" type="submit" value="Save Entry">
`
}