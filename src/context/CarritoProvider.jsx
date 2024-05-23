import React, { useReducer } from 'react';
import { CarritoContext } from './CarritoContext';

const initialState = [];

const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[CARRITO] Agregar compra':
            return [...state, action.payload];
        case '[CARRITO] Aumentar cantidad de compra': 
            // TODO: lógica para aumentar cantidad
            return state;
        case '[CARRITO] Disminuir cantidad de Compra': 
            // TODO: lógica para disminuir cantidad
            return state;
        case '[CARRITO] Eliminar compra':
            return state.filter(compra => compra.id !== action.payload);
        default:
            return state;
    }
};

export const CarritoProvider = ({ children }) => {
    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

    const agregarCompra = (compra) => {
        dispatch({
            type: '[CARRITO] Agregar compra',
            payload: compra
        });
    };

    const aumentarCantidad = (id) => {
        dispatch({
            type: '[CARRITO] Aumentar cantidad de compra',
            payload: id
        });
    };

    const disminuirCantidad = (id) => {
        dispatch({
            type: '[CARRITO] Disminuir cantidad de Compra',
            payload: id
        });
    };

    const eliminarCompra = (id) => {
        dispatch({
            type: '[CARRITO] Eliminar compra',
            payload: id
        });
    };

    return (
        <CarritoContext.Provider value={{ listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
            {children}
        </CarritoContext.Provider>
    );
};
