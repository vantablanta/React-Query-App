
export const fetchPeople = async () => {
    const response = await fetch("https://swapi.dev/api/people/")
    return response.json()
}


export const addPeople = async (value) => {
    const response = await fetch('https://swapi.dev/api/people/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
    });
    console.log(value)
    return response.json();
}
