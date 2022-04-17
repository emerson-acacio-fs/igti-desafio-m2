import { formatNumber } from "helpers"
import * as S from "./styles"

export type CandidateCardProps = {
  candidateName: string
  candidateImage: string
  isWinner?: boolean
  votingPopulation: number
  percentageVotes: number
}

export const CandidateCard = ({
  candidateName,
  isWinner = false,
  votingPopulation,
  percentageVotes,
  candidateImage,
}: CandidateCardProps) => (
  <S.WrapperCandidateCard>
    <S.MainContent>
      <S.Imag src={`${process.env.PUBLIC_URL}/images/${candidateImage}.png`} />
      <S.CandidateData>
        <S.Percentage isWinner={isWinner}>
          {formatNumber(percentageVotes)}%
        </S.Percentage>
        <S.Votes>{formatNumber(votingPopulation, true)} votos</S.Votes>
      </S.CandidateData>
    </S.MainContent>
    <S.InfoWrapper>
      <S.CandidateName>{candidateName}</S.CandidateName>
      <S.CandidateStatus isWinner={isWinner}>
        {isWinner ? "Eleito" : "Não eleito"}
      </S.CandidateStatus>
    </S.InfoWrapper>
  </S.WrapperCandidateCard>
)
