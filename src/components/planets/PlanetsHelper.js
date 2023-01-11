
const fetchPlanets = async () => {
    const response = await fetch("https://swapi.dev/api/planets/")
    return response.json()
}

export default fetchPlanets