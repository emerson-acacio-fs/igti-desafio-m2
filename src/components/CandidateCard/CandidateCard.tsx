import * as S from "./styles"

export type CandidateCardProps = {
  candidateName: string
  candidateImage: string
  isWinner?: boolean
  totalVotes: number
  percentageVotes: number
}

export const CandidateCard = ({
  candidateName,
  isWinner = false,
  totalVotes,
  percentageVotes,
  candidateImage,
}: CandidateCardProps) => (
  <S.WrapperCandidateCard>
    <S.MainContent>
      <S.Imag src={`${process.env.PUBLIC_URL}/images/${candidateImage}.png`} />
      <S.CandidateData>
        <S.Percentage>{percentageVotes}</S.Percentage>
        <S.Votes>{totalVotes}</S.Votes>
      </S.CandidateData>
    </S.MainContent>
    <S.CandidateName>{candidateName}</S.CandidateName>
    <S.CandidateStatus>{isWinner ? "Eleito" : "Não eleito"}</S.CandidateStatus>
  </S.WrapperCandidateCard>
)
