import React from 'react'
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import {AddCategory} from '../../components/AddCategory'


describe('Pruebas en el componente <AddCategory />', () => {

    const setCategories = jest.fn() // simula la función y nos permite rastrear si fue llamado o no, cuantas veces fue llamado, etc.
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {

        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('Debe coincidir con el snapshot', () => {

        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe cambiar la caja de texto', () => {
       
        const input = wrapper.find('input'),
              value = 'Hola mundo'

        input.simulate('change', {target: {value}});

        const inputWithValue = wrapper.find('input')
        expect(inputWithValue.prop('value')).toBe(value)
    })

    test('No debe hacer el submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} })
        expect(setCategories).not.toHaveBeenCalled()
    })

    test('debe llamar la función setCategories y limpiar la caja de texto', () => {

        const input = wrapper.find('input'),
              value = 'Hola mundo'

        input.simulate('change', {target: {value}});

        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect(setCategories).toHaveBeenCalled()
        expect(setCategories).toHaveBeenCalledTimes(1)
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) )

        const inputWithoutValue = wrapper.find('input')

        expect(inputWithoutValue.prop('value')).toBe('')
    })
})