import { ComponentStory, ComponentMeta } from "@storybook/react"

import { CityBox } from "./CityBox"

export default {
  title: "CityBox",
  component: CityBox,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof CityBox>

export const Default: ComponentStory<typeof CityBox> = (args) => (
  <CityBox {...args} />
)

Default.args = {
  city: "Asgard",
  candidateNumber: 5,
  abstentions: 12112,
  totalVotes: 12112,
  attendances: 12112,
  candidates: [
    {
      id: "2222",
      name: "Antman",
      userName: "antman",
      totalVotes: 222,
      percentageVotes: 222,
      isWinner: true,
    },
    {
      id: "333223",
      name: "Ironman",
      userName: "ironMan",
      totalVotes: 222,
      percentageVotes: 222,
      isWinner: false,
    },
  ],
}
