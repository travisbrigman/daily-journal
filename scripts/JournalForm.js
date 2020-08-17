import { getMoods, useMoods } from "./MoodProvider.js";

const contentTarget = document.querySelector(".entryForm");

export const JournalEntryComponent = () => {
  getMoods().then(() => {
    const copiedMoods = useMoods();

    contentTarget.innerHTML = `
<form class="journal-form">
<fieldset class="date-picker">
    <label>Date of Entry</label>
    <input type="datetime-local" id="today" placeholder="yyyy-mm-dd" name="journal-entry-date">
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
        <option value="0">What is your mood?</option>
        ${copiedMoods
          .map((mood) => {
            return `<option value="${mood.id}">${mood.label}</option>`;
          })
          .join("")}
    </select>
</fieldset>
</form>
 <input id="save-button" type="submit" value="Save Entry">
`;
  });
};
