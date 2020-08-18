export let allInstructors = []

export const getInstructors = () => {
    return fetch("http://localhost:8088/instructors")
    .then((response) => response.json())
    .then(parsedInstructors => {
        allInstructors = parsedInstructors
    });   
}

export const useInstructors = () => {
    return allInstructors.slice()
}
