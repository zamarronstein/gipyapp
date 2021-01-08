import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas del componente <GifGridItem />', () => {

    const title = 'Testing';
    const url = 'http://test.gif';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe renderizar el componente', () => {


        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('Debe tener el texto dentro del párrafo', () => {

        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);
    });

    test('Debe tener el alt y el src en la imágen', () => {

        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Debe tener la clase fadeIn', () => {
        const className = 'animate__fadeIn';
        const div = wrapper.find('div');

       expect(div.prop('className').includes(className)).toBe(true);
    });
});