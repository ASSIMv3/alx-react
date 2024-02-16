import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

test('Footer renders without crushing', () => {
    const { container } = render(<Footer />)
    expect(container.firstChild).toBeDefined()
})
test('Footer, at the very least, renders the test "Copyright"', () => {
    render(<Footer />)
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument() 
})