import { ComponentStory, ComponentMeta } from "@storybook/react"

import { CandidateCard } from "./CandidateCard"

export default {
  title: "CandidateCard",
  component: CandidateCard,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof CandidateCard>

export const Default: ComponentStory<typeof CandidateCard> = (args) => (
  <CandidateCard {...args} />
)

Default.args = {
  candidateName: "Ironman",
  candidateImage: "ironman",
  totalVotes: 3000000,
  percentageVotes: 10.1,
}
