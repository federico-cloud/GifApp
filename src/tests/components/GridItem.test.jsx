import { render, screen } from "@testing-library/react"
import { GridItem } from "../../components/GridItem"

describe('Tests in GridItem ', () => {
    
    const title = 'test'
    const url   = 'https://www.google.com/';

    test('must display the componente correctly', () => { 
        const { container } = render(<GridItem title={title} url={url} />);
        
        expect(container).toMatchSnapshot();
    });

    test('must display the image with its URL and ALT', () => {
        render(<GridItem title={title} url={url} />);
        const {src, alt} = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(`imagen de ${title}`);
    })

    test('must display component title', () => {
        render(<GridItem title={title} url={url} />);
        expect(screen.getByRole('link')).toBeTruthy();
    })
});