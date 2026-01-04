import './Footer.css'

const Footer = () => {
  return (
    <footer className="main-footer">
      <p>© {new Date().getFullYear()} Tierra de Mestizos</p>

      <a
        href="https://wa.me/5492944237685?text=Hola%20quiero%20consultar%20disponibilidad%20en%20Tierra%20de%20Mestizos%20
"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-whatsapp"
      >
        <i className="bi bi-whatsapp"></i>
        Consultar disponibilidad
      </a>
    </footer>
  )
}

export default Footer