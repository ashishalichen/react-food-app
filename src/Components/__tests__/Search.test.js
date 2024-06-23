import { render } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from '../mocks/mockRestListData.json'

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it('should render the body component', () => {

    render(<Body />)
})