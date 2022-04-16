import { screen } from "@testing-library/react"
import { render } from "helpers/test-utils"
import { CandidateCard } from "./CandidateCard"

describe("< CandidateCard />", () => {
  it("should exist in the document", () => {
    render(
      <CandidateCard
        candidateName="Ironman"
        totalVotes={100}
        percentageVotes={10.0}
        candidateImage="ironman"
      />,
    )
    expect(screen.getByText(/plop/i)).toBeInTheDocument()
  })
})
