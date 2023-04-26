import "./NavBar.css"

const NavBar = () => {
  return (
    <header className="header">
        <nav className="nav">
            <ul className="navList">
                <li><a href="">Sobre mi</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Proyectos</a></li>
                <li><a href="">Contacto</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar