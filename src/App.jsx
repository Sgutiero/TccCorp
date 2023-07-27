import Home from "./components/layouts/Home"
import Show from "./components/layouts/productos/Show"
import Editar  from "./components/layouts/productos/Editar"
import Crear from "./components/layouts/productos/Crear"
import Clientes from "./components/clientes/Clientes"
import EditarCliente from "./components/clientes/EditarCliente"
import CrearCliente from "./components/clientes/CrearCliente"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


let router = createBrowserRouter([
  {
    path:'/clientes',
    element: <Clientes />
  },
  {
    path:'/editarCliente/:id',
    element: <EditarCliente />
  },
  {
    path:'/crearCliente',
    element: <CrearCliente />
  },
  {
    path:'/show',
    element: <Show />
  },
  {
    path:'/editar/:id',
    element: <Editar />
  },
  {
    path:'/crear',
    element: <Crear />
  },
  {
    path: '/',
    element: <Home />
  },
  // {
  //   path: '/poke-create',
  //   element: <PokeCreate />
  // },
  // {
  //   path: '/poke-edit/:id',
  //   element: <PokeEdit />
  // }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App