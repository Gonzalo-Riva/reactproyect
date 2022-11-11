import { CartWidget } from "./CartWidget";
import Link from './Link'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand text-danger" href="#">Marlboro</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/shop/ropa'>Tienda</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><CartWidget /></a>
                        </li>



                    </ul>
                </div>
            </div>
        </nav>

    )
}
/* 
  <li className="nav-item">
                            <a className="nav-link" href="#"><CartWidget /></a>
                        </li>*/
export default Navbar;