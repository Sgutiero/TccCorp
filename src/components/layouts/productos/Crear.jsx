import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase-config/firebase'
import Header from '../../helpers/Header'
import Footer from '../../helpers/Footer'

export const Crear = () => {

    const [descripcion, setDescripcion] = useState('')
    const [stock, setStock] = useState('')
    const [destino, setDestino] = useState('')
    const navigate = useNavigate()

    const productoCollection = collection(db, "products")

    const store = async (e) => {
        e.preventDefault()
        await addDoc( productoCollection, { descripcion: descripcion, stock: stock, destino: destino } )
        navigate('/')
    }

  return (
    <>
    <Header />
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1>Crear Producto</h1>
                <form onSubmit={store}>
                    <div className='mb-3'>
                        <label className='form-label'>Producto</label>
                        <input
                            value={descripcion}
                            onChange={ (e) => setDescripcion(e.target.value)} 
                            type="text" 
                            className="form-control" 
                        />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Ciudad de origen</label>
                        <input
                            value={stock}
                            onChange={ (e) => setStock(e.target.value)} 
                            type="text" 
                            className="form-control" 
                        />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Ciudad de Destino</label>
                        <input
                            value={destino}
                            onChange={ (e) => setDestino(e.target.value)} 
                            type="text" 
                            className="form-control" 
                        />
                    </div>

                    <button type='submit' className='btn btn-primary'>Guardar</button>
                </form>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}


export default Crear