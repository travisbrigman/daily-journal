export let entriesTags = []

export const getEntriesTags = () => {
    return fetch("http://localhost:8088/entriestags")
    .then((response) => response.json())
    .then(parsedEntriesTags => {
        entriesTags = parsedEntriesTags
    });   
}

export const useEntriesTags = () => {
    return entriesTags.slice()
}
 let tags = []

export const getTags = () => {
    return fetch("http://localhost:8088/tags")
    .then((response) => response.json())
    .then(parsedTags => {
        tags = parsedTags
    });   
}

export const useTags = () => {
    return tags.slice()
}


export const saveNewTags = (newTagObject) => {
    return fetch("http://localhost:8088/tags", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTagObject),
    }).then(getTags)
    // .then(dispatchStateChangeEvent)
  };