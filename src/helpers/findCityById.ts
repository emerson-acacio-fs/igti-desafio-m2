import { CitiesWithCandidatesType } from "./getData"

export function findCityById(
  citiesWithCandidates: CitiesWithCandidatesType[],
  id: string,
): CitiesWithCandidatesType {
  const city = citiesWithCandidates.find((c) => c.id === id)
  if (city) {
    return city
  }
  return {
    id: "",
    name: "",
    absence: 0,
    votingPopulation: 0,
    presence: 0,
    candidates: [],
  }
}
