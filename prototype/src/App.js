import React from 'react';
import  {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import ClothsPage from './Pages/Cloths'


function App() {
    return (
        <Router>
            <Header/>
                <Routes>
                    <Route path={"/"} element={<Home/>} />
                    <Route path={"/men's-clothing"} element={<ClothsPage mens={true}/>} />
                    <Route path={"/women's-clothing"} element={<ClothsPage mens={false}/>} />
                </Routes>
        </Router>


    );
}

export default App
