import { render, screen } from '@testing-library/react'
import Banner from './Banner'

describe('Banner component', () => {
  test('renders banner with success type correctly', () => {
    render(<Banner type="success" line="singleline" />)
    expect(screen.getByRole('alert')).toHaveClass('banner-success')
    expect(screen.getByText('Success! Your action has been completed.')).toBeInTheDocument()
  })

  test('renders banner with warning type correctly', () => {
    render(<Banner type="warning" line="singleline" />)
    expect(screen.getByRole('alert')).toHaveClass('banner-warning')
    expect(screen.getByText('Warning! Please be careful with this action.')).toBeInTheDocument()
  })

  test('renders banner with error type correctly', () => {
    render(<Banner type="error" line="singleline" />)
    expect(screen.getByRole('alert')).toHaveClass('banner-error')
    expect(screen.getByText('Error! Something went wrong. Try again later.')).toBeInTheDocument()
  })

  test('renders banner with neutral type correctly', () => {
    render(<Banner type="neutral" line="singleline" />)
    expect(screen.getByRole('alert')).toHaveClass('banner-neutral')
    expect(screen.getByText('Note: This is a neutral informational message.')).toBeInTheDocument()
  })

  test('does not display children content in singleline mode', () => {
    const childText = 'This should not be displayed in singleline mode'
    const { container } = render(
      <Banner type="success" line="singleline">
        {childText}
      </Banner>
    )
    expect(container.querySelector('.banner-children')).not.toBeInTheDocument()
    expect(screen.queryByText(childText)).not.toBeInTheDocument()
  })

  test('displays children content in multiline mode', () => {
    const childText = 'This should be displayed in multiline mode'
    const { container } = render(
      <Banner type="success" line="multiline">
        {childText}
      </Banner>
    )
    expect(screen.getByText(childText)).toBeInTheDocument()
    expect(container.querySelector('.banner-children')).toBeInTheDocument()
    expect(container.querySelector('.banner-children')).toContainElement(
      screen.getByText(childText)
    )
  })

  test('has proper accessibility attributes', () => {
    render(<Banner type="success" line="singleline" />)
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })
})
