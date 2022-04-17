import { CitiesWithCandidatesType } from "./getData"

export function findCityById(
  citiesWithCandidates: CitiesWithCandidatesType[],
  id: string,
): CitiesWithCandidatesType | undefined {
  return citiesWithCandidates.find((c) => c.id === id)
}
