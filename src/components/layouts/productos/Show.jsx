import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase-config/firebase'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Header from '../../helpers/Header'
import Footer from '../../helpers/Footer'

const MySwal = withReactContent(Swal);

const Show = () => {
// configuramos los hooks
const [products, setProducts] = useState( [] )

//referenciamos a la db firestore
const productsCollection = collection(db, "products");

//funcion para mostrar todos los docs
const getProducts = async () => {
    const data = await getDocs(productsCollection)
    
    setProducts(
        data.docs.map( (doc) => ( {...doc.data(), id:doc.id}) )
    )
    
}

const deleteProducts = async (id) => {
    const productsDoc = doc(db, "products", id)
    await deleteDoc(productsDoc)
    getProducts()
}

const confirmDeleteProducts = async (id) => {
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
            deleteProducts(id)
            Swal.fire(
                "Deleted",
                "Tu producto fue borrado",
                "success"
            )
        }
    })
}

useEffect( () => {
    getProducts()
}, [] )


  return (
    <>
    <Header />
    <div className='container'>
        
        <div className='row'>
            <div className='col'>
                <div className='d-grid gap-2'>
                    <Link to="/crear" className='btn btn-warning mt-2 mb-2'>Crear nuevo producto</Link>
                </div>

                <table className='table table-dark table-hover'>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Ciudad Origen</th>
                            <th>Ciudad Destino</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        { products.map( (product) => (
                            <tr key={product.id}>
                                <td>{product.descripcion}</td>
                                <td>{product.stock}</td>
                                <td>{product.destino}</td>
                                <td>
                                    <Link to={`/editar/${product.id}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                                    <button onClick={ () => { confirmDeleteProducts(product.id) }} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                         ) ) }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Show