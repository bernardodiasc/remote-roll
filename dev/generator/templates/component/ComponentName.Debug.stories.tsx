import <%= componentName %> from './<%= componentName %>'

import type { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof <%= componentName %>>

export default {
  title: '<%= choseComponentType %>/<% if (parentComponent) { %><%= parentComponent.replace(/\w/, c => c.toUpperCase()) %>/Components/<%= componentName %><% } else { %><%= componentName %><% } %>/Debug',
  component: <%= componentName %>,
} as Meta<typeof <%= componentName %>>

export const NoProps: Story = {
  name: 'No props',
  args: {},
}
