import './Header.css'

const Header = () => {
  return (
    <header className="main-header">
      <h1 className="brand-title">Tierra de Mestizos</h1>

      <nav className="header-nav">
        <a href="#rooms">Habitaciones</a>
        <a href="#location">Ubicación</a>
        <a href="#reviews">Reseñas</a>
      </nav>
      <div className='button-container'>
        <a
          href="https://wa.me/5492944237685?text=Hola%20quiero%20consultar%20disponibilidad%20en%20Tierra%20de%20Mestizos%20
  "
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <i className="bi bi-whatsapp"></i>
          Contacto
        </a>
      </div>
    </header>
  )
}

export default Header