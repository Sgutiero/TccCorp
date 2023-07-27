import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase-config/firebase'
import Header from '../helpers/Header'
import Footer from '../helpers/Footer'

export const CrearCliente = () => {

    const [documento, setDocumento] = useState('')
    const [nombreCompleto, setNombreCompleto] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [telefono, setTelefono] = useState('')
    const navigate = useNavigate()

    const clientesCollection = collection(db, "clientes")

    const storeClientes = async (e) => {
        e.preventDefault()
        await addDoc( clientesCollection, { documento: documento, nombreCompleto: nombreCompleto, ciudad: ciudad, telefono: telefono } )
        navigate('/')
    }

  return (
    <>
    <Header />
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1>Crear nuevo cliente</h1>
                <form onSubmit={storeClientes}>
                    <div className='mb-3'>
                        <label className='form-label'>Documento Identidad</label>
                        <input
                            value={documento}
                            onChange={ (e) => setDocumento(e.target.value)} 
                            type="text" 
                            className="form-control" 
                        />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Nombre Completo</label>
                        <input
                            value={nombreCompleto}
                            onChange={ (e) => setNombreCompleto(e.target.value)} 
                            type="text" 
                            className="form-control" 
                        />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Ciudad</label>
                        <input
                            value={ciudad}
                            onChange={ (e) => setCiudad(e.target.value)} 
                            type="text" 
                            className="form-control" 
                        />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Telefono</label>
                        <input
                            value={telefono}
                            onChange={ (e) => setTelefono(e.target.value)} 
                            type="text" 
                            className="form-control" 
                        />
                    </div>

                    <button type='submit' className='btn btn-primary'>Guardar</button>
                </form>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}


export default CrearCliente