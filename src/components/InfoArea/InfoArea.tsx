import { formatNumber } from "helpers"
import * as S from "./styles"

export type InfoAreaProps = {
  name: string
  totalVotes: number
  abstentions: number
  attendances: number
  candidateNumber: number
}

export const InfoArea = ({
  name = "Asgard",
  totalVotes,
  abstentions,
  attendances,
  candidateNumber,
}: InfoAreaProps) => (
  <S.WrapperInfoArea>
    <S.Header>Eleições de {name}</S.Header>
    <S.Totals>
      <S.Voters>
        <strong>Total de eleitores: </strong>
        {formatNumber(totalVotes, true)}
      </S.Voters>
      <S.Abstentions>
        <strong>Abstenção: </strong> {formatNumber(abstentions, true)}
      </S.Abstentions>
      <S.Attendances>
        <strong>Comparecimento: </strong> {formatNumber(attendances, true)}
      </S.Attendances>
    </S.Totals>
    <S.CandidateNumber>
      {formatNumber(candidateNumber, true)} candidatos
    </S.CandidateNumber>
  </S.WrapperInfoArea>
)
