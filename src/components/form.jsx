import React, { useEffect, useState } from "react";

const Form = ({ registerData, users, errorDocumento, setErrorDocumento, errorNombre, setErrorNombre}) => {
  const [documento, setDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [precioCompra, setPrecioCompra] = useState("");
  const [ganancia, setGanancia] = useState("");
  const [precioVenta, setPrecioVenta] = useState(0);
  const [categoria, setCategoria] = useState("---");
  const [iva, setIva] = useState(0);

  const gananciaCalculada = parseInt(precioCompra) + parseInt(ganancia);
  const ivaCalculado = parseInt(gananciaCalculada * 1.19);

  const validarDocumento = () => {
    const repetirDocumento = users.some((d) =>d.documento === documento)
    if(repetirDocumento){
        setErrorDocumento("Este documento ya esta registrado intenta con otro")
    }else{
        setErrorDocumento("")
    }
  }

  const validarNombre = () => {
    const repetirNombre = users.some((n) =>n.nombre === nombre)
    if(repetirNombre){
        setErrorNombre("Est nombre ya esta registrado")
    }else{
        setErrorNombre("")
    }
  }


  const register = (e) => {
    e.preventDefault();
    // Agregar el documento solo si no está duplicado
    registerData({
      documento,
      nombre,
      precioCompra,
      ganancia,
      gananciaCalculada,
      categoria,
      ivaCalculado,
    });
    setDocumento("");
    setNombre("");
    setPrecioCompra("");
    setGanancia("");
    setPrecioVenta("");
    setCategoria("---");
    setIva(0);
  };

  return (
    <>
      <form
        onSubmit={register}
        className="w-[25%] block p-[20px] rounded-[20px] shadow-2xl"
        action=""
      >
        <h2>Formulario</h2>
        <label className="block mb-[0px]">
          <p className="inline-block translate-y-[13px] bg-white translate-x-[5px]">
            Documento
          </p>
          <input
            autoFocus
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            onBlur={validarDocumento}
            className="bg-white p-[10px] rounded-[12px] shadow-md border-1 border-black/10 w-full"
            type="number"
            required
          />
        {errorDocumento && 
            <div className="text-red-600 mt-[10px] text-[14px]">
                {errorDocumento}
            </div>
        } 
        </label>
        <label className="block mb-[0px]">
          <p className="inline-block translate-y-[13px] bg-white translate-x-[5px]">Nombre</p>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            onBlur={validarNombre}
            className="bg-white p-[10px] rounded-[12px] shadow-md border-1 border-black/10 w-full"
            type="text"
            required
          />
        {errorNombre && 
            <div className="text-red-600 mb-[10px] text-[14px}">
                <p>{errorNombre}</p>
            </div>
        }
        </label>
        {/* Resto de los campos */}
        <div className="flex gap-[10px]">
          <label className="block mb-[0px]">
            <p className="inline-block translate-y-[13px] bg-white translate-x-[5px]">Precio compra</p>
            <input
              value={precioCompra}
              onChange={(e) => setPrecioCompra(e.target.value)}
              className="bg-white p-[10px] rounded-[12px] shadow-md border-1 border-black/10 w-full"
              type="number"
              required
            />
          </label>
          <label className="block mb-[0px]">
            <p className="inline-block translate-y-[13px] bg-white translate-x-[5px]">Ganancia</p>
            <input
              value={ganancia}
              onChange={(e) => setGanancia(e.target.value)}
              className="bg-white p-[10px] rounded-[12px] shadow-md border-1 border-black/10 w-full"
              type="number"
              required
            />
          </label>
        </div>
        <label className="block mb-[0px]">
          <p className="inline-block translate-y-[13px] bg-white translate-x-[5px]">Precio venta</p>
          <input
            readOnly
            value={gananciaCalculada}
            onChange={(e) => setPrecioVenta(e.target.value)}
            className="bg-white p-[10px] rounded-[12px] shadow-md border-1 border-black/10 w-full"
            type="number"
          />
        </label>
        <label className="block mb-[0px]">
          <p className="inline-block translate-y-[13px] bg-white translate-x-[5px]">Categoria</p>
          <select
            required
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="bg-white p-[10px] rounded-[12px] shadow-md border-1 border-black/10 w-full"
            name=""
            id=""
          >
            <option value="---">---</option>
            <option value="muebles">Muebles</option>
            <option value="comida">Comida</option>
            <option value="bebida">Bebida</option>
          </select>
        </label>
        <label className="block mb-[0px]">
          <p className="inline-block translate-y-[13px] bg-white translate-x-[5px]">Iva</p>
          <input
            readOnly
            value={ivaCalculado}
            onChange={(e) => setIva(e.target.value)}
            className="bg-white p-[10px] rounded-[12px] shadow-md border-1 border-black/10 w-full"
            type="number"
          />
        </label>

        <input
          className="bg-blue-600 uppercase mt-[20px] cursor-pointer p-[11px] rounded-[14px] text-white w-full"
          type="submit"
          value={"Enviar datos"}
        />
      </form>
    </>
  );
};

export default Form;
