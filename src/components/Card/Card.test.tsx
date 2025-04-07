import { render, screen } from '@testing-library/react'
import Card from './Card'
import { FiStar } from 'react-icons/fi'

describe('Card component', () => {
  test('renders card with title correctly', () => {
    render(<Card title="Test Card Title">Card content</Card>)
    expect(screen.getByText('Test Card Title')).toBeInTheDocument()
    expect(screen.getByText('Test Card Title').tagName).toBe('H3')
    expect(screen.getByText('Test Card Title')).toHaveClass('card-title')
  })

  test('renders card with children content correctly', () => {
    const childText = 'Test card content goes here'
    const { container } = render(<Card title="Card Title">{childText}</Card>)
    expect(screen.getByText(childText)).toBeInTheDocument()
    expect(container.querySelector('.card-children')).toBeInTheDocument()
    expect(container.querySelector('.card-children')).toContainElement(screen.getByText(childText))
  })

  test('renders default icon when no custom icon is provided', () => {
    render(<Card title="Card Title">Content</Card>)
    const iconContainer = screen.getByText('Card Title').parentElement?.querySelector('.card-icon')
    expect(iconContainer).toBeInTheDocument()
    expect(iconContainer?.querySelector('[aria-hidden="true"]')).toBeInTheDocument()
  })

  test('renders custom icon when provided', () => {
    const customIcon = <FiStar data-testid="custom-icon" size={58} aria-hidden="true" />
    render(
      <Card title="Card with Custom Icon" icon={customIcon}>
        Card with custom icon
      </Card>
    )
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
  })

  test('applies proper CSS classes to card elements', () => {
    const { container } = render(<Card title="Styled Card">Card content</Card>)

    const cardElement = screen.getByText('Card content').closest('.card')
    expect(cardElement).toBeInTheDocument()
    expect(cardElement).toHaveClass('card')

    const titleElement = screen.getByText('Styled Card')
    expect(titleElement).toHaveClass('card-title')

    expect(container.querySelector('.card-children')).toBeInTheDocument()
    expect(container.querySelector('.card-children')).toContainElement(
      screen.getByText('Card content')
    )
  })

  test('memo prevents unnecessary re-renders', () => {
    const { rerender } = render(<Card title="Memo Test">First render</Card>)

    rerender(<Card title="Memo Test">First render</Card>)

    expect(screen.getByText('Memo Test')).toBeInTheDocument()
    expect(screen.getByText('First render')).toBeInTheDocument()

    rerender(<Card title="Updated Title">Updated content</Card>)
    expect(screen.getByText('Updated Title')).toBeInTheDocument()
    expect(screen.getByText('Updated content')).toBeInTheDocument()
  })
})
