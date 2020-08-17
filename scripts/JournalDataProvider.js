let journal = [];

const eventHub = document.querySelector(".main");

const dispatchStateChangeEvent = () => {
  const entryStateChangedEvent = new CustomEvent("entryStateChanged")

  eventHub.dispatchEvent(entryStateChangedEvent)
}

export const getJournalEntries = () => {
  return fetch("http://localhost:8088/journal?_expand=mood")
    .then((response) => response.json())
    .then((ParsedEntries) => {
      journal = ParsedEntries;
    });
};

export const saveJournalEntry = (entry) => {
  return fetch("http://localhost:8088/journal?_expand=mood", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entry),
  }).then(getJournalEntries)
  .then(dispatchStateChangeEvent)
};

export const useJournalEntries = () => {
  const sortedByDate = journal.sort(
    (currentEntry, nextEntry) =>
      Date.parse(nextEntry.date) - Date.parse(currentEntry.date)
  );
  return sortedByDate;
};
