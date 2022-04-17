import { Header, InfoArea } from "components"
import { CityBox } from "components/CityBox"
import { findCityById } from "helpers"
import { useData } from "hooks/useData"
import { Error } from "@styled-icons/boxicons-regular"
import PulseLoader from "react-spinners/PulseLoader"
import * as S from "./style"

export function Home() {
  const {
    cities,
    selectCityId,
    setSelectCityId,
    citiesWithCandidates,
    error,
    loading,
  } = useData()

  if (error) {
    return (
      <S.ErrorWrapper>
        <Error size="15rem" />
        <div>Ocorreu um erro</div>
      </S.ErrorWrapper>
    )
  }

  const selectedCity = findCityById(citiesWithCandidates, selectCityId)

  return (
    <>
      {loading && (
        <S.SpinnerWrapper>
          <PulseLoader color="#187be6" size={15} />
        </S.SpinnerWrapper>
      )}
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
