import { useState, useEffect } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import { formatearDinero, calculaMontoMasInteres } from './helpers/index.js'
// import { calculaMontoMasInteres } from './helpers/'
// import { calculaCuotaMensual } from './helpers/'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  const [cantidad, setCantidad ] = useState( 10000 );
  const [meses, setMeses ] = useState( 6 );

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100

  function handleChange(evt) {

    setCantidad( + evt.target.value);
    // console.log(cantidad)
  }

  function handleClickDecremento() {

    // console.log(cantidad)
    const valor = cantidad - STEP
    // console.log(valor)

    if(valor < MIN) {
      alert('Cantidad no valida')
      return;
    }
    setCantidad(valor);

    // console.log(cantidad)
    
    // console.log(valor)

  }

  function handleClickIncremento() {
    
    const valor = cantidad + STEP
    if(valor > MAX) {
      alert('No es posible seguir subiendo')
      return;
    } 
    setCantidad(valor);  
  }

  // console.log(cantidad);
  // El useState retorna arreglo y arriba hacemos el destructuring de ese arreglo.

  // const [count, setCount] = useState(0)

  // ESTE App.jsx YA ES UN COMPONENTE DE REACT
  //ANTES DEL RETURN PUEDEN IR LA FUNC Y VARIABLES JS 
  // LO QUE VA EN EL RETURD ES LO QUE SE IMPRIME EN PANTALLA
  // const holaJuan = "Hola Juan!";
  // const generoMascukubi = true;

  return (

    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">

      {/* <h1 className="text-4xl font-extrabold text-gray-500 text-center">¿Cuánto <span className="text-indigo-600">dinero </span> necesitás?</h1> */}

      <Header />

      <div className='flex justify-between my-6'>

        <Button 
          operador='-'
          func={handleClickDecremento}
        />

        <Button
          operador='+'
          func={handleClickIncremento}
        />
      </div>

      <input 
        type="range"
        className='w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600'
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />

      <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>{formatearDinero(cantidad)}</p>

      {/* {holaJuan} */}
      {/* <br /> */}
      {/* {generoMascukubi ? 'Es hombre' : 'es mina'} */}


      <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
        Elige un plazo a pagar        
      </h2>

      <select
        className='mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500'
        value={meses}
        onChange={ evt => setMeses( +evt.target.value) }

      >
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
        <option value="24">24 meses</option>
      </select>

      {/* <p>{meses+2}</p> */}

      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
          Resumen de Pagos        
        </h2>
        <p className='text-xl font-bold text-center text-gray-500'>
          Meses: {meses}
        </p>
        <p className='text-xl font-bold text-center text-gray-500'>
          Total a pagar: {formatearDinero(calculaMontoMasInteres(cantidad, meses))}
        </p>
        <p className='text-xl font-bold text-center text-gray-500'>
          Cuota mensual: {formatearDinero(calculaMontoMasInteres(cantidad, meses)/meses)}
        </p>
        
      </div>

    </div>

    // <h1 className="text-6xl font-extrabold">{nombre}</h1>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
