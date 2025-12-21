import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './components/layouts/DefaultLayout'

import { Home } from './pages/Home'
import { History } from './pages/History'

export function Reuter() {
    return (
        <Routes>
            <Route path='' element={<DefaultLayout />}> 

            <Route path='/' element={<Home />} />
            <Route path='/history' element={<History />} /> 
            </Route>
        </Routes>

    );

}