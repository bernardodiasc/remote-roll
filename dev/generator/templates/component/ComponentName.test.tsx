import { screen, render, fireEvent } from '@testing-library/react'

import <%= componentName %> from './<%= componentName %>'

const renderComponent = (props = {}) =>
  render(<<%= componentName %> {...props} />)

describe('<%= componentName %> component', () => {
  test('Should not render the component when there are no props', () => {
    renderComponent()
    const component = screen.queryByTestId('<%= componentName %>')
    expect(component).not.toBeInTheDocument()
  })

  test('Should render the component and form should be submitted', () => {
    const onClick = jest.fn()
    renderComponent({ onClick })
    const component = screen.queryByTestId('<%= componentName %>')
    const email = screen.queryByTestId('<%= componentName %>-email')!
    const button = screen.queryByTestId('<%= componentName %>-button')!
    expect(component).toBeInTheDocument()
    fireEvent.change(email, { target: { value: 'email@provider.com' } })
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })
})
