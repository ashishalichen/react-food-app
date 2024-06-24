import { act, fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from '../mocks/mockRestListData.json'
import { BrowserRouter } from "react-router-dom"

import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it('should render res list for burger text input', async () => {

    await act(() => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ))

    const searchBtn = screen.getByRole('button', { name: 'Search' })

    const searchInput = screen.getByTestId('searchInput')

    fireEvent.change(searchInput, { target: { value: 'burger' } })
    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId('resCard')

    expect(cards.length).toBe(2)

})


