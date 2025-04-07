import { render, screen } from '@testing-library/react'
import Badge from './Badge'

describe('Badge component', () => {
  test('renders badge with correct text', () => {
    render(<Badge>Test Badge</Badge>)
    expect(screen.getByText('Test Badge')).toBeInTheDocument()
  })

  test('applies correct color class', () => {
    render(<Badge color="blue">Blue Badge</Badge>)
    const badge = screen.getByText('Blue Badge')
    expect(badge).toHaveClass('btn-blue')
  })

  test('applies correct shape class', () => {
    render(<Badge shape="square">Square Badge</Badge>)
    const badge = screen.getByText('Square Badge')
    expect(badge).toHaveClass('badge-square')
  })

  test('uses default props when not specified', () => {
    render(<Badge>Default Badge</Badge>)
    const badge = screen.getByText('Default Badge')
    expect(badge).toHaveClass('badge-pill')
    expect(badge).toHaveClass('btn-white')
  })

  test('renders Badge.Label correctly', () => {
    render(<Badge.Label label="Test Label" />)
    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })
})
