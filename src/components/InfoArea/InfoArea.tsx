import { formatNumber } from "helpers"
import * as S from "./styles"

export type InfoAreaProps = {
  name: string
  votingPopulation: number
  absence: number
  presence: number
  candidateNumber: number
}

export const InfoArea = ({
  name = "Asgard",
  votingPopulation,
  absence,
  presence,
  candidateNumber,
}: InfoAreaProps) => (
  <S.WrapperInfoArea>
    <S.Header>Eleições de {name}</S.Header>
    <S.Totals>
      <S.Voters>
        <strong>Total de eleitores: </strong>
        {formatNumber(votingPopulation, true)}
      </S.Voters>
      <S.Absence>
        <strong>Abstenção: </strong> {formatNumber(absence, true)}
      </S.Absence>
      <S.Presence>
        <strong>Comparecimento: </strong> {formatNumber(presence, true)}
      </S.Presence>
    </S.Totals>
    <S.CandidateNumber>
      {formatNumber(candidateNumber, true)} candidatos
    </S.CandidateNumber>
  </S.WrapperInfoArea>
)
