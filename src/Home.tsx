import {ReactElement} from 'react'
import MatButton from './components/Button'
import Modal from './components/Modal/Index'

const HomePage = ():ReactElement =>{
    return(
        <div>
            Home
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta voluptas exercitationem vitae? Provident perspiciatis suscipit perferendis, officia totam reiciendis, excepturi quos dolorem, enim praesentium aliquam accusantium. Nulla inventore odit eius!</h1>
            <Modal/>
        </div>
    )
}

export default HomePage