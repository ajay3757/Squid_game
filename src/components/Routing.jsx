import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Game from './Game'
import Form from './Form'
import Mediumgame from './Mediumgame'
import Hardgame from './Hardgame'

function Routing() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Form/>}/>
                    <Route path='/easygame' element={<Game />} />
                    <Route path='/mediumgame' element={<Mediumgame/>}/>
                    <Route path='/hardgame' element={<Hardgame/>}/>
                </Routes>
        </div>
    )
}

export default Routing