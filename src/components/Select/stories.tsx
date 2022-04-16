import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Select } from "./Select"

export default {
  title: "Select",
  component: Select,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Select>

export const Default: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>
    <option>oi</option>
    <option>oi2</option>
    <option>oi3</option>
  </Select>
)
