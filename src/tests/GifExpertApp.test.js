import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas al componente <GifExpertApp />', () => {


    test('Debe renderizar correctamente <GiftExpertApp />', () => {

        const wrapper = shallow(<GifExpertApp />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('Deber mostrar una lista de categorías', () => {
        const categories = ['Naruto', 'Hinata', 'Gokú'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(toJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    
});
