import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase-config/firebase";
import Header from "../../helpers/Header";
import Footer from "../../helpers/Footer";

export const Editar = () => {
  const [descripcion, setDescripcion] = useState("");
  const [destino, setDestino] = useState('')
  const [stock, setStock] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const product = doc(db, "products", id);
    const data = { descripcion: descripcion, stock: stock, destino: destino };
    await updateDoc(product, data);
    navigate("/");
  };

  const getProductsById = async (id) => {
    const product = await getDoc(doc(db, "products", id));
    if (product.exists()) {
      setDescripcion(product.data().descripcion);
      setStock(product.data().stock);
      setDestino(product.data().destino);
    } else {
        console.log("El producto no existe")
    }
  };

  useEffect( () => {
    getProductsById(id)
  }, [])
  return (
    <>
    <Header />
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Editar Producto</h1>
          <form onSubmit={update}>
            <div className="mb-3">
              <label className="form-label">Producto</label>
              <input
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Ciudad de Origen</label>
              <input
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Ciudad de Destino</label>
              <input
                value={destino}
                onChange={(e) => setDestino(e.target.value)}
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
    <Footer/>
    </>
  );
};


export default Editar;