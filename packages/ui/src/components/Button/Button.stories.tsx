import React from 'react'
import Button, { ButtonProps } from './Button'
import { Meta, Story } from '@storybook/react'

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
  primary: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary',
}
export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    borderColor: { control: 'color' },
  },
} as Meta
