import { getGifs } from "../../helpers/getGifs"

describe('Test in getGifs', () => {

    test('must return an array of gifs', async() => {
        const gifs = await getGifs('amor');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
        expect(gifs[0].url).toContain("https:");
    });

    test('must return an array of gifs greater than zero', async() => {
        const gifs = await getGifs('amor');
        expect(gifs.length).toBeGreaterThan(0);
    });

    test('must return an array of objects gifs with properties id, title, url', async() => {
        const gifs = await getGifs('amor');
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    });

    test('the propertie url must start with https:', async() => {
        const gifs = await getGifs('amor');
        expect(gifs[0].url).toContain("https:");
    });
})