import { CandidateCard } from "components/CandidateCard"
import { InfoArea } from "components/InfoArea"
import { InfoAreaProps } from "components/InfoArea/InfoArea"
import { CandidateType } from "types/Candidate"
import * as S from "./styles"

export type CityBoxProps = {
  candidates: CandidateType[]
} & InfoAreaProps

export const CityBox = ({
  city,
  candidateNumber,
  abstentions,
  totalVotes,
  attendances,
  candidates,
}: CityBoxProps) => (
  <S.WrapperCityBox>
    <InfoArea
      city={city}
      totalVotes={totalVotes}
      abstentions={abstentions}
      attendances={attendances}
      candidateNumber={candidateNumber}
    />
    <S.WrapperCandidates>
      {candidates.map((candidate) => (
        <CandidateCard
          key={candidate.id}
          candidateName={candidate.name}
          candidateImage={candidate.userName}
          totalVotes={candidate.totalVotes}
          percentageVotes={candidate.percentageVotes}
          isWinner={candidate.isWinner}
        />
      ))}
    </S.WrapperCandidates>
  </S.WrapperCityBox>
)
