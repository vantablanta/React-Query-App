
const fetchPeople = async () => {
    const response = await fetch("https://swapi.dev/api/people/")
    return response.json()
}

export default fetchPeople