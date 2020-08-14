export let allMoods = []

export const getMoods = () => {
    return fetch("http://localhost:8088/moods")
    .then((response) => response.json())
    .then(parsedMoods => {
        allMoods = parsedMoods
    });   
}

export const useMoods = () => {
    return allMoods.slice()
}
