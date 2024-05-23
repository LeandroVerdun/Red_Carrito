import React, { useContext, useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { ProductosContext } from '../context/ProductosContext';


export const ComprasPage = () => {
    
    const { productos } = useContext( ProductosContext )

    return (
        <>
            <h1>Compras:</h1>
            <hr />
            <div className="productos-container">
                {productos.map(producto => (
                    <Card
                        key={producto.id}
                        imagen={producto.image}
                        titulo={producto.title}
                        descripcion={producto.description}
                        precio={producto.price}
                    />
                ))}
            </div>
        </>
    );
};
