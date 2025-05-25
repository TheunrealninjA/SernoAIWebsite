import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <h1 className='Title'>SernoAI</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;