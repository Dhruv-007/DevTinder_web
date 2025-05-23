
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { Body } from './Body'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { LoginPage } from './LoginPage'
import { Feed } from './Feed'
import Profile from './Profile'





function App() {

  return (
  <>
   <Provider store={store}>
  <BrowserRouter basename='/'>
  <Routes>
    <Route path='/' element={<Body/>}>
    <Route path='/' element={<Feed/>} />
    <Route path='/login-page' element={<LoginPage/>} />
    <Route path='/profile' element={<Profile/>} />


    </Route>

  </Routes>
  </BrowserRouter>
  </Provider>
  </>
  )
}

export default App
