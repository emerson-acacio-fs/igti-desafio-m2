import { Header, InfoArea } from "components"
import { CityBox } from "components/CityBox"
import { findCityById } from "helpers"
import { useData } from "hooks/useData"
import * as S from "./sttyle"

export function Home() {
  const { cities, selectCityId, setSelectCityId, citiesWithCandidates, error } =
    useData()
  if (error) {
    return <h1>Ocorreu um erro</h1>
  }

  const selectedCity = findCityById(citiesWithCandidates, selectCityId)
  if (!selectedCity) {
    return <h1>Ocorreu um erro</h1>
  }

  return (
    <>
      <Header
        cities={cities}
        value={selectCityId}
        handelSelectedCity={setSelectCityId}
      />
      <S.MainContent>
        <CityBox candidates={selectedCity.candidates}>
          <InfoArea
            name={selectedCity.name}
            votingPopulation={selectedCity.votingPopulation}
            candidateNumber={selectedCity.candidates.length}
            absence={selectedCity.absence}
            presence={selectedCity.presence}
          />
        </CityBox>
      </S.MainContent>
    </>
  )
}
