import { action } from '@storybook/addon-actions'

import <%= componentName %> from './<%= componentName %>'

import type { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof <%= componentName %>>

export default {
  title: '<%= choseComponentType %>/<% if (parentComponent) { %><%= parentComponent.replace(/\w/, c => c.toUpperCase()) %>/Components/<%= componentName %><% } else { %><%= componentName %><% } %>/Use Cases',
  component: <%= componentName %>,
} as Meta<typeof <%= componentName %>>

export const WithPlaceholder: Story = {
  name: 'With placeholder',
  args: {
    onClick: action('onClick'),
    placeholder: 'Type your email',
  },
}
