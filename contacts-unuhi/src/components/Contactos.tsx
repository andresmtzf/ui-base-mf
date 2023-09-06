import { Input } from './input/Input'

export const Contactos = () => {
  return (
    <>
      <div className='card text-center'>
        <div className='card-header'>
          <ul className='nav nav-tabs card-header-tabs'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='true' href='#'>
                Datos generales
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Datos especificos
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link disabled' aria-disabled='true'>
                Contactos Vinculados
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link disabled' aria-disabled='true'>
                Fechas importantes
              </a>
            </li>
          </ul>
        </div>
        <div className='card-body'>
          <h5 className='card-title'>Formulario aquí</h5>
          <div>
            <Input></Input>
          </div>
        </div>
      </div>
    </>
  )
}
