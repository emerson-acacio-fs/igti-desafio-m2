import { ComponentStory, ComponentMeta } from "@storybook/react"

import { InfoArea } from "./InfoArea"

export default {
  title: "InfoArea",
  component: InfoArea,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof InfoArea>

export const Default: ComponentStory<typeof InfoArea> = (args) => (
  <InfoArea {...args} />
)

Default.args = {
  name: "Asgard",
  votingPopulation: 12112,
  absence: 12112,
  presence: 12112,
  candidateNumber: 12112,
}
