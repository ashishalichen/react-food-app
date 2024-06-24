import { act, fireEvent, render, screen } from "@testing-library/react"
import Header from '../Header';
import RestaurantMenu from '../RestaurantMenu'
import MOCK_DATA from '../mocks/mockResMenu.json'
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from '../Cart'

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
);

it('should load restaurant menu component', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
    ))

    const accordionHeader = screen.getByText('Half & Half Pizzas [Big 10"](3)')

    fireEvent.click(accordionHeader)
    const items = screen.getAllByTestId('foodItems')

    expect(items.length).toBe(3)

    const addBtns = screen.getAllByRole('button', { name: 'ADD' })
    fireEvent.click(addBtns[0])
    fireEvent.click(addBtns[1])
    const oneItem = screen.getByText('Cart(2 items)')

    expect(oneItem).toBeInTheDocument()

    expect(screen.getAllByTestId('foodItems').length).toBe(5)

    fireEvent.click(screen.getByRole('button', { name: 'Clear Cart' }))

    expect(screen.getAllByTestId('foodItems').length).toBe(3)

})