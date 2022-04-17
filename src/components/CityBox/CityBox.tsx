import { CandidateCard } from "components/CandidateCard"

import { ReactChild } from "react"
import { CandidateType } from "types/Candidate"
import * as S from "./styles"

export type CityBoxProps = {
  candidates: CandidateType[]
  children: ReactChild
}

export const CityBox = ({ children, candidates }: CityBoxProps) => (
  <S.WrapperCityBox>
    {children}
    <S.WrapperCandidates>
      {candidates.map((candidate) => (
        <CandidateCard
          key={candidate.id}
          candidateName={candidate.name}
          candidateImage={candidate.userName}
          votingPopulation={candidate.votingPopulation}
          percentageVotes={candidate.percentageVotes}
          isWinner={candidate.isWinner}
        />
      ))}
    </S.WrapperCandidates>
  </S.WrapperCityBox>
)
