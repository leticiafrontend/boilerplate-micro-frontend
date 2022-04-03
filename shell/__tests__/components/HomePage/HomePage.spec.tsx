import { screen, render } from '@testing-library/react'
import { HomePage } from 'pages/HomePage'
import Theme from 'themes'

describe('HomePage component', () => {
  it('Should render HomePage', () => {
    render(
      <Theme>
        <HomePage />
      </Theme>
    )

    const text = screen.getByText('Hi from Shell App')

    expect(text).toBeInTheDocument()
  })
})
