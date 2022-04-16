import { expect } from "@storybook/jest"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { within, userEvent } from "@storybook/testing-library"
import { Header } from "./Header"

export default {
  title: "Header",
  component: Header,
  argTypes: {
    handelSelectedCity: { action: true },
  },
} as ComponentMeta<typeof Header>

export const Default: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
)

Default.bind({})
Default.args = {
  cities: [
    { id: "ww33", name: "Asgard" },
    { id: "ww222", name: "AAA" },
  ],
}
Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.selectOptions(canvas.getByTestId("select"), "Asgard")
  await expect(args.handelSelectedCity).toBeCalled()
}
