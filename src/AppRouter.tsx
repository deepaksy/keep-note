import {ReactElement} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import HomePage from './Home'
import Accounts from './pages/Accounts'
import MenuBarSidePanel from "./components/MenubarSidePane"

const AppRouter = ():ReactElement=>{
  return(
    <Router>
      <MenuBarSidePanel key={null} type={''} props={undefined}>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/accounts' element={<Accounts/>} />
      </Routes>
      </MenuBarSidePanel>
    </Router>
  )
}

export default AppRouter