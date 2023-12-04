import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>
            CAQTUR
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Paquetes
          </NavLink>
        </li>

      </ul>
      <ul className='flex items-center gap-3'>

        <li>
          <NavLink
            to='/reserva'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Reserva
          </NavLink>
        </li>
        <li>

        </li>
        <li>
          <NavLink
            to='/sing-in'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Cristian Cortes
          </NavLink>
        </li>
        <li>
          🛒 0
        </li>
      </ul>
    </nav>
  )
}

export default Navbar