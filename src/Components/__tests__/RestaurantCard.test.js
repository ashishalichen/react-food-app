import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from '../mocks/resCardMock.json'
import '@testing-library/jest-dom'

it('should render restaurant card component with data', () => {

    render(
        <RestaurantCard props={MOCK_DATA} />
    )

    const name = screen.getByText('Pizza Hut')
    expect(name).toBeInTheDocument()
})