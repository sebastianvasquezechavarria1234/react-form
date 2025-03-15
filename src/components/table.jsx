import React from "react";

const Table = ({users}) => {
    return(
        <>
            <div className="w-[75%] block">
                <div className="grid grid-cols-8 border-b-1 border-black/40 py-[20px]">
                    <p>ID</p>
                    <p>Documento</p>
                    <p>Nombre</p>
                    <p>Precio Compra</p>
                    <p>Ganancia</p>
                    <p>Precio Venta</p>
                    <p>Categoria</p>
                    <p>Iva 19%</p>
                </div>
                {users.map((element, index) => (
                    <div className="grid grid-cols-8  border-b-1 border-black/40 py-[20px]">
                        <p>{(index+1)}</p>
                        <p>{element.documento}</p>
                        <p>{element.nombre}</p>
                        <p>{element.precioCompra}</p>
                        <p>{element.ganancia}</p>
                        <p>{element.gananciaCalculada}%</p>
                        <p>{element.categoria ? element.categoria : "No aplica"}</p>
                        <p>{element.ivaCalculado}</p>
                    </div>
                ))}
            </div>
            
        </>
    )
}


export default Table
