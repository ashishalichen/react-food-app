import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


describe("Contact us page test case", () => {
    test('Should load contact component', () => {
        render(<Contact />);

        const heading = screen.getByRole("heading")

        expect(heading).toBeInTheDocument();

    })

    test('Should load button inside contact component', () => {
        render(<Contact />);

        const button = screen.getByRole("button")

        expect(button).toBeInTheDocument();

    })


    it('Should load text submit inside contact component', () => {
        render(<Contact />);

        const button = screen.getByText("Submit")

        expect(button).toBeInTheDocument();

    })


    it('should load two input boxes', () => {
        render(<Contact />)

        const inputBoxes = screen.getAllByRole('textbox');
        // console.log(inputBoxes)

        expect(inputBoxes.length).toBe(2)
    })
})
