import React from 'react'
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import toJson from 'enzyme-to-json';
import { useFetchGifs } from '../../hooks/useFetchGifs';
//import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas del componente <GifGrid />', () => {

    const category = 'Naruto'

    test('Debe renderizar el componente correctamente', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper  = shallow(<GifGrid category={category} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    test('Debe renderizar el componente con datos', () => {

        const data = [{
            id: 'ABC',
            title: 'Naruto Usumaki',
            url: 'http://localhost/naruto.jpg'
        }, {
            id: '123',
            title: 'Hinata',
            url: 'http://localhost/hinata.jpg'
        }]

        useFetchGifs.mockReturnValue({
            data,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={category} />)

        expect(toJson(wrapper)).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(data.length)
    })
})
