import { CandidateCard } from "components/CandidateCard"

import { ReactChild, useEffect, useState } from "react"
import { CandidateType } from "types/Candidate"
import * as S from "./styles"

export type CityBoxProps = {
  candidates: CandidateType[]
  children: ReactChild
}

export const CityBox = ({ children, candidates }: CityBoxProps) => {
  const [startAnimation, setStartAnimation] = useState(false)
  useEffect(() => {
    setStartAnimation(true)
    setTimeout(() => {
      setStartAnimation(false)
    }, 700)
  }, [candidates])
  return (
    <S.WrapperCityBox>
      {children}
      <S.WrapperCandidates startAnimation={startAnimation}>
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
}
