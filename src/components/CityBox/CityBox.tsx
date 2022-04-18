import { CandidateCard } from "components/CandidateCard"

import { ReactChild } from "react"
import { CandidateType } from "types/Candidate"
import * as S from "./styles"

export type CityBoxProps = {
  candidates: CandidateType[]
  children: ReactChild
}
let count = 0
export const CityBox = ({ children, candidates }: CityBoxProps) => {
  count += 1
  return (
    <S.WrapperCityBox>
      {children}
      <S.WrapperCandidates>
        {candidates.map((candidate) => (
          <CandidateCard
            key={`${count}_${candidate.id}`}
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
}
