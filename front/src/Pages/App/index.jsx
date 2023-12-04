import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'
import Reserva from '../MyOrders'
import Empresa from '../SignIn'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/reserva/:id', element: <Reserva />},
    { path: '/*', element: <NotFound /> },
    { path: '/empresa/id', element: <Empresa /> }
    
  ])

  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  )
}

export default App
