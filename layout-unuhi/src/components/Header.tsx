import { BrowserRouter, Link } from 'react-router-dom'

export const links = [
  {
    name: 'Contactos',
    href: '/contactos',
  },
  {
    name: 'Comercial',
    href: '/comercial',
  },
  {
    name: 'Facturación',
    href: '/facturacion',
  },
  {
    name: 'Finanzas',
    href: '/finanzas',
  },
]

export const Header = () => {
  return (
    <>
      <BrowserRouter>
        <header className='bd-header bg-primary text-dark bg-opacity-10 py-3 d-flex align-items-stretch border-bottom'>
          <div className='container-fluid d-flex align-items-center justify-content-center'>
            <h1 className='d-flex align-items-center fs-4 mb-0'>
              <img
                src='../assets/media/logos/logo.png'
                width='100'
                height='30'
                className='me-3'
                alt='Unuhi'
              />
            </h1>
            <div className=''>
              <ul className='nav nav-pills'>
                {links.map((l) => (
                  <li className='nav-item'>
                    <Link
                      className={`nav-link ${l.name !== 'Contactos' ? 'disabled' : ''}`}
                      to={l.href}>
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </header>
      </BrowserRouter>
    </>
  )
}
