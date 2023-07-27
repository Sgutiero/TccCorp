import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase-config/firebase'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Header from '../helpers/Header'
import Footer from '../helpers/Footer'

const MySwal = withReactContent(Swal);

export const Clientes = () => {

    const [clientes, setClientes] = useState( [] )
    const clientesCollection = collection(db, "clientes");

    const getClientes = async () => {
        const data = await getDocs(clientesCollection)
        
        setClientes(
            data.docs.map( (doc) => ( {...doc.data(), id:doc.id}) )
        )
        
    }

    const deleteCliente = async (id) => {
        const clientesDoc = doc(db, "clientes", id)
        await deleteDoc(clientesDoc)
        getClientes()
    }

    const confirmDeleteCliente = async (id) => {
        MySwal.fire({
            title:'Are you sure?',
            text: "No puedes revertir esto",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText:"Yes!"
        }).then((result) => {
            if( result.isConfirmed ){
                deleteCliente(id)
                Swal.fire(
                    "Deleted",
                    "Tu producto fue borrado",
                    "success"
                )
            }
        })
    }

    useEffect( () => {
        getClientes()
    }, [] )
    
    

  return (
    <>
    <Header />
    <div className='container'>
        
        <div className='row'>
            <div className='col'>
                <div className='d-grid gap-2'>
                    <Link to="/crearCliente" className='btn btn-warning mt-2 mb-2'>Crear nuevo cliente</Link>
                </div>

                <table className='table table-dark table-hover'>
                    <thead>
                        <tr>
                            <th>Documento Identidad</th>
                            <th>Nombre Completo</th>
                            <th>Teléfono</th>
                            <th>Ciudad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        { clientes.map( (cliente) => (
                            <tr key={cliente.id}>
                                <td>{cliente.documento}</td>
                                <td>{cliente.nombreCompleto}</td>
                                <td>{cliente.telefono}</td>
                                <td>{cliente.ciudad}</td>
                                <td>
                                    <Link to={`/editarCliente/${cliente.id}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                                    <button onClick={ () => { confirmDeleteCliente(cliente.id) }} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                         ) ) }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Clientes
