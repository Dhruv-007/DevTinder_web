
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { Body } from './Body'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { LoginPage } from './Screens/LoginPage'
import { Feed } from './Screens/Feed'
import Profile from './Profile'
import Connections from './Screens/Connections'
import Requests from './Screens/Requests'





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
    <Route path='/connections' element={<Connections/>} />
    <Route path='/requests' element={<Requests/>} />


    </Route>

  </Routes>
  </BrowserRouter>
  </Provider>
  </>
  )
}

export default App
