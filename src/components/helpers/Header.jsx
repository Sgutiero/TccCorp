import {Link} from 'react-router-dom'
import imagen from '../img/tcc.png'
import '../helpers/Header.css'

const Header = () => {
    return(
        <header>
            <img src={imagen} alt="tccImagen" width="130" height="100" className="d-inline-block align-text-top"/>
            <nav>
                <Link className='btn btn-warning' to={'/'}>Home</Link>
                <Link className='btn btn-warning' to={'/show'}>Productos</Link>
                <Link className='btn btn-warning' to={'/clientes'}>Clientes</Link>
            </nav>
        </header>
    )
}

export default Header