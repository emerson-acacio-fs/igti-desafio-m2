import { ComponentStory, ComponentMeta } from "@storybook/react"
import { InfoArea } from "components/InfoArea"

import { CityBox } from "./CityBox"

export default {
  title: "CityBox",
  component: CityBox,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof CityBox>

export const Default: ComponentStory<typeof CityBox> = (args) => (
  <CityBox {...args}>
    <InfoArea
      name="Asgard"
      votingPopulation={222}
      absence={333}
      presence={444}
      candidateNumber={2233}
    />
  </CityBox>
)

Default.args = {
  candidates: [
    {
      id: "2222",
      name: "Antman",
      userName: "antman",
      votingPopulation: 222,
      percentageVotes: 222,
      isWinner: true,
    },
    {
      id: "333223",
      name: "Ironman",
      userName: "ironMan",
      votingPopulation: 222,
      percentageVotes: 222,
      isWinner: false,
    },
  ],
}
