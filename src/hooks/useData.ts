import { getData } from "helpers"
import { CitiesWithCandidatesType } from "helpers/getData"
import { useEffect, useState } from "react"
import { CityType } from "types/CityType"

export function useData() {
  const [cities, setCities] = useState<CityType[]>([])
  const [error, setError] = useState<boolean>(false)
  const [selectCityId, setSelectCityId] = useState<string>("")
  const [citiesWithCandidates, setCitiesWithCandidates] = useState<
    CitiesWithCandidatesType[]
  >([])
  useEffect(() => {
    getData(setCities, setCitiesWithCandidates, setSelectCityId, setError)
  }, [])

  return { cities, selectCityId, setSelectCityId, citiesWithCandidates, error }
}
