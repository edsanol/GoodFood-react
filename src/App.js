import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Register } from './pages/Register'
import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { startChecking } from './store/actions/ActionRestaurants'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  const { loggedIn } = useSelector((state) => state.restaurantReducer)

  const PrivateRoute = ({ children }) => {
    return loggedIn ? children : <Navigate to="/register" />
  }
  const PublicRoute = ({ children }) => {
    return loggedIn ? <Navigate to="/" /> : children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<PrivateRoute children={<HomePage />}></PrivateRoute>}
        />
        <Route
          path="/register"
          element={<PublicRoute children={<Register />}></PublicRoute>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
