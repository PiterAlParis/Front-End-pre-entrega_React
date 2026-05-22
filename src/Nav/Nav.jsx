import "./Nav.css";
export const Nav = () => {
    return (
			<nav>
                <ul className="nav-list">
                    <li><a href="#productos">Productos</a></li>
                    <li><a href="#directorio">Directorio</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                    <li><a href="/carrito.html" target="_blank" rel="noopener noreferrer">Carrito</a></li>
                </ul>
				
			</nav>
    );
 
};