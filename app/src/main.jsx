import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/error404';

const App = () => {
    return (
        <>
        <BrowserRouter>
             <Routes>
                <Route index element={<Home />} path="/home" />
                <Route index element={<Error404 />} path="/" />
      
            </Routes>
        </BrowserRouter>
            
        </>
    );
};


export default App
