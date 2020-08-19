let journal = [];

const eventHub = document.querySelector(".main");

const dispatchStateChangeEvent = () => {
  const entryStateChangedEvent = new CustomEvent("entryStateChanged")

  eventHub.dispatchEvent(entryStateChangedEvent)
}

export const getJournalEntries = () => {
  return fetch("http://localhost:8088/journal?_expand=mood&_expand=instructor")
    .then((response) => response.json())
    .then((ParsedEntries) => {
      journal = ParsedEntries;
    });
};

export const saveJournalEntry = (entry) => {
  return fetch("http://localhost:8088/journal", {
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

export const deleteEntry = entryId => {
  return fetch(`http://localhost:8088/journal/${entryId}`, {
      method: "DELETE"
  })
      .then(getJournalEntries)
}

export const updateEntry = entry => {
  console.log(entry.id)
  return fetch(`http://localhost:8088/journal/${entry.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entry),
  })
  .then(getJournalEntries)
  .then(dispatchStateChangeEvent)
}
