export const tagRetriever = () => {
  getTags()
  .then(getEntriesTags)
  .then(() => {
    journalTags = useTags();
    entriesTags = getEntriesTags()
  })
}
//responsible for rendering a single journal entry

import { saveJournalEntry, updateEntry } from "./JournalDataProvider.js";
import { useTags, getTags, getEntriesTags } from "./TagsDataProvider.js";

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
let journalTags = []
let entriesTags = []

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
    const tagSplitter = entryTags.value.split(',');
    
    /* if a tag is equal to tags.subject, then get the tag's id. 
    else create a new entry in the tags database,
    & capture the id of the newly created tag in the newEntry object.
    
    compare tags in the db with tags in the new entry
    
    Does the tag already exist?
    Yes:
    get the tag's id,
    add it to the entry
    
    No:
    add the tag to the tag database
    get the ID of the newly created tag
    add it to the entry
    
    */
   console.log(journalTags);
   console.log(tagSplitter);

  //  const foundMatchingTags = tagSplitter.forEach((newTag) => {
  //    return journalTags.forEach(
  //      (dbTag) => {
  //     if (newTag === dbTag.subject) {
  //        return dbTag.subject

  //      };
  //    });
  //  });

  //  console.log(foundMatchingTags);

   for (dbTag in journalTags){
     for (newTag in tagSplitter){
       if (dbTag.subject === newTag) {
         newTag.tagId = dbTag.id
       } else {
         //add new tag to db
         // get the id
         // add it to the entry
       }
     }
   }
        
        
        
        
        
        const newEntry = {
          date: entryDate.value,
          concept: entryConcepts.value,
          entry: entryText.value,
          moodId: parseInt(entryMood.value),
          instructorId: parseInt(entryInstructor.value),
        };

    if (id.value === "") {
      // No id value, so POST new entry with `saveEntry()`
      // from data provider
      saveJournalEntry(newEntry);
    } else {
      newEntry.id = parseInt(id.value)
      updateEntry(newEntry);
    }
    document.getElementById("journal-form").reset();
  }
});
