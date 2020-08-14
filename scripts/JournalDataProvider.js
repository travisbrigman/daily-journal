let journal = [];

export const getJournalEntries = () => {
  return fetch("http://localhost:8088/journal?_expand=mood")
    // .then((response) => response.text())
    // .then(text => console.log(text))
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
  }).then(getJournalEntries);
};

export const useJournalEntries = () => {
  const sortedByDate = journal.sort(
    (currentEntry, nextEntry) =>
      Date.parse(nextEntry.date) - Date.parse(currentEntry.date)
  );
  return sortedByDate;
};
