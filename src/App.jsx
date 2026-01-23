import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
import LayoutTwo from './layout/LayoutTwo'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

const App = () => {
  const MyRouter = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne />}>
        <Route index element={<Home />} />
      </Route>

      <Route path='/auth' element={<LayoutTwo />}>
        <Route index element={<Navigate to="signUp" replace />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={MyRouter} />
    </>
  )
}

export default App