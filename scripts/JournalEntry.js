import { saveJournalEntry, updateEntry } from "./JournalDataProvider.js";
import {
  useTags,
  getTags,
  getEntriesTags,
  saveNewTags,
} from "./TagsDataProvider.js";

export const tagRetriever = () => {
  getTags()
    .then(getEntriesTags)
    .then(() => {
      journalTags = useTags();
      entriesTags = getEntriesTags();
    });
};
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
  <button id="editEntry--${entry.id}">Edit</button>
  
  </section>
  `;
};

//💾 State Variables
let journalTags = [];
let entriesTags = [];

const eventHub = document.querySelector(".main");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "save-button") {
    const id = document.querySelector("#entryId");

    const entryDate = document.querySelector("#today");
    const entryConcepts = document.querySelector("#concepts");
    const entryText = document.querySelector("#journal-text");
    const entryMood = document.querySelector("#mood");
    const entryInstructor = document.querySelector("#instructor");
    const entryTags = document.querySelector("#tags");
    const tagSplitter = entryTags.value.split(",");


    //For each tag, check if there is already a tag object in your database with that subject
   let existingTagIds = [];
   let newTags = [];

   // creates an array of tags that are not already in the database
    const addNewTags = () => { tagSplitter.forEach(newTag => {
      const tagExistence = journalTags.find(tag => tag.subject === newTag)
      if (tagExistence === undefined)  {

        return newTags.push(newTag) 
      }
    })
  }
    //adds the new tags to the database
    const tagAdder = () => { newTags.forEach((newTagSubject) => {
      const newTagObject = {
        subject: newTagSubject,
      };
      saveNewTags(newTagObject);
    });
  }

    //this compares the two arrays and gets the id for each and adds it to an array
    const foundMatchingTags = () => { tagSplitter.forEach((newTag) => {
      return journalTags.forEach((dbTag) => {
        if (newTag === dbTag.subject) {
          existingTagIds.push(dbTag.id);
        }
      });
    });
  }

    const newEntry = {
      date: entryDate.value,
      concept: entryConcepts.value,
      entry: entryText.value,
      moodId: parseInt(entryMood.value),
      instructorId: parseInt(entryInstructor.value),
      tags: existingTagIds,
    };

    if (id.value === "") {
      // No id value, so POST new entry with `saveEntry()`
      // from data provider
      saveJournalEntry(newEntry);
    } else {
      newEntry.id = parseInt(id.value);
      updateEntry(newEntry);
    }
    document.getElementById("journal-form").reset();
  }
});
