import { NavLink, Outlet } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
      <ul className='flex gap-8'>
        <li>
          <NavLink to='/'> Home </NavLink>
        </li>
        <li>
          <NavLink to='/about'> About </NavLink>
        </li>
        <li>
          <NavLink to='contact'> Contact </NavLink>
        </li>
      </ul>
      <Outlet />
    </nav>
  )
}
