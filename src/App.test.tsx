import { render, screen } from '@testing-library/react'
import App from './App'

test('Renders TODO Title', () => {
  render(<App />)
  const linkElement = screen.getByText('TODO List')
  // expect(linkElement).toBeInTheDocument()
})
