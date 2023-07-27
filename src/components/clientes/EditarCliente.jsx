import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config/firebase";
import Header from "../helpers/Header";
import Footer from "../helpers/Footer";

export const EditarCliente = () => {

  const [documento, setDocumento] = useState("");
  const [nombreCompleto, setNombreCompleto] = useState('')
  const [ciudad, setCiudad] = useState('');
  const [telefono, setTelefono] = useState('')
  const navigate = useNavigate();
  const { id } = useParams();

  const updateCliente = async (e) => {
    e.preventDefault();
    const cliente = doc(db, "clientes", id);
    const data = { documento: documento, nombreCompleto: nombreCompleto, ciudad: ciudad, telefono: telefono };
    await updateDoc(cliente, data);
    navigate("/");
  };

  const getClientesById = async (id) => {
    const cliente = await getDoc(doc(db, "clientes", id));
    if (cliente.exists()) {
      setDocumento(cliente.data().documento);
      setNombreCompleto(cliente.data().nombreCompleto);
      setCiudad(cliente.data().ciudad);
      setTelefono(cliente.data().telefono);
    } else {
        console.log("El cliente no existe")
    }
  };

  useEffect( () => {
    getClientesById(id)
  }, [])

  return (
    <>
    <Header />
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Editar cliente</h1>
          <form onSubmit={updateCliente}>
            <div className="mb-3">
              <label className="form-label">Documento</label>
              <input
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Nombre Completo</label>
              <input
                value={nombreCompleto}
                onChange={(e) => setNombreCompleto(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">ciudad</label>
              <input
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Telefono</label>
              <input
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default EditarCliente