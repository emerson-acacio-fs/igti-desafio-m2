import { getCandidates, getCities, getElection } from "api/services"
import { Dispatch, SetStateAction } from "react"
import { CandidateRequestType, CandidateType } from "types/Candidate"

import { CityType, CityWithTotalsType } from "types/CityType"
import { sort } from "./sort"

const getCandidateById = (
  candidates: CandidateRequestType[],
  id: string,
): CandidateRequestType | undefined =>
  candidates.find((candidate) => candidate.id === id)

export type CitiesWithCandidatesType = {
  candidates: CandidateType[]
} & CityWithTotalsType

export async function getData(
  setCities: Dispatch<SetStateAction<CityType[]>>,
  setCitiesWithCandidates: Dispatch<SetStateAction<CitiesWithCandidatesType[]>>,
  setSelectCityId: Dispatch<SetStateAction<string>>,
  setError: Dispatch<SetStateAction<boolean>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
): Promise<void> {
  setLoading(true)
  let cities = await getCities()
  const candidates = await getCandidates()
  const election = await getElection()
  if (!cities || !candidates || !election) {
    setError(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  } else {
    const citiesWithCandidates: CitiesWithCandidatesType[] = cities.map(
      (city) => {
        let candidatesByCity: CandidateType[] = []

        election
          .filter((result) => result.cityId === city.id)
          .forEach((candidate) => {
            const candidateData = getCandidateById(
              candidates,
              candidate.candidateId,
            )

            if (candidateData) {
              candidatesByCity.push({
                id: candidateData.id,
                name: candidateData.name,
                userName: candidateData.username,
                votingPopulation: candidate.votes,
                percentageVotes: (candidate.votes / city.presence) * 100,
                isWinner: false,
              })
            }
          })
        candidatesByCity = sort<CandidateType>(
          candidatesByCity,
          ["votingPopulation"],
          "desc",
        )
        if (candidatesByCity.length) {
          candidatesByCity[0].isWinner = true
        }
        return {
          id: city.id,
          name: city.name,
          absence: city.absence,
          votingPopulation: city.votingPopulation,
          presence: city.presence,
          candidates: candidatesByCity,
        }
      },
    )
    setCitiesWithCandidates(citiesWithCandidates)
    if (cities) {
      cities = sort<CityWithTotalsType>(cities, ["name"])
      setCities(cities)
      if (citiesWithCandidates.length) {
        setSelectCityId(cities[0].id)
      }
    }
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }
}
