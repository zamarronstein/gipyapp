import { getGifs } from "../../helpers/getGifs";

describe('Test del helper getGifs', () => {

    test('Debe obtener los gifs desde la API de giphy', async () => {
       
       const gifs = await getGifs('Naruto');

       expect(gifs.length).toBe(10);
    });

    test('Debe regresar vacío ', async () => {

       const gifs = await getGifs('');

       expect(gifs.length).toBe(0);
    });
});
