import React, { useReducer } from 'react';
import { CarritoContext } from './CarritoContext';

const initialState = [];

const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[CARRITO] Agregar compra':
            return [...state, action.payload];
        case '[CARRITO] Aumentar cantidad de compra': 
            return state.map(item => {
                const cant = item.cantidad + 1
                if(item.id === action.payload) return {...item, cantidad: cant}
                return item
            })
            
        case '[CARRITO] Disminuir cantidad de Compra': 
            return state.map(item => {
                const cant = item.cantidad -1
                if(item.id === action.payload && item.cantidad > 1) return {...item, cantidad: cant}
                return item
            })
        case '[CARRITO] Eliminar compra':
            return state.filter(compra => compra.id !== action.payload);
        default:
            return state;
    }
};

export const CarritoProvider = ({ children }) => {
    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

    const agregarCompra = (compra) => {
        compra.cantidad = 1
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
