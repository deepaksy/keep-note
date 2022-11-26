import {ReactElement} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import HomePage from './Home'
import Accounts from './pages/Accounts'
import AppContainer from "./components/AppContainer"
import Beta from './components/beta'

const AppRouter = ():ReactElement=>{
  return(
    <Router>
      <AppContainer key={null} type={''} props={undefined}>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/accounts' element={<Accounts/>} />
        <Route path='/beta' element={<Beta/>}/>
      </Routes>
      </AppContainer>
    </Router>
  )
}

export default AppRouter