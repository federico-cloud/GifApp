import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../components/AddCategory"

describe('Tests in AddCategory', () => {

    test('The value of the input text must change', () => {

        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: {value: 'Saitama'} });

        expect(input.value).toBe('Saitama');
    })

})