import { useQuery } from "react-query"
import { fetchPlanets } from "../components/planets/PlanetsHelper"
import { fetchPeople } from "../components/people/PeopleHelper"


export const usePlanets = () =>
    useQuery({ queryKey: ['planets'], queryFn: fetchPlanets, staleTime: 10 * (60 * 1000) })

export const usePeople = () =>
    useQuery({ queryKey: ['people'], queryFn: fetchPeople, staleTime: 10 * (60 * 1000), cacheTime: 15 * (60 * 1000), })
