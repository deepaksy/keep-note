import {ReactElement} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import HomePage from './Home'
import Accounts from './pages/Accounts'
import AppContainer from "./components/AppContainer"

const AppRouter = ():ReactElement=>{
  return(
    <Router>
      <AppContainer key={null} type={''} props={undefined}>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/accounts' element={<Accounts/>} />
      </Routes>
      </AppContainer>
    </Router>
  )
}

export default AppRouter