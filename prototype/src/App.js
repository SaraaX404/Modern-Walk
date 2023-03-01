import React from 'react';
import  {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'

function App() {
    return (
        <Router>
            <Header/>
                <Routes>
                    <Route path={'/'} element={<Home/>} />
                </Routes>
        </Router>


    );
}

export default App
