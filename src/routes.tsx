import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Success from "./pages/Success/Success";
import {RoutesProvider} from "./store/GlobalState";
import HomeMobile from "./pages/HomeMobile/HomeMobile";
import SuccessMobile from "./pages/SuccessMobile/SuccessMobile";

export default function AppRouter() {
    return(
        <BrowserRouter>
            <RoutesProvider>
                    {
                        window.innerWidth <= 425 ?
                            <Routes>
                                <Route element={<HomeMobile/>} path='/'/>
                                <Route element={<SuccessMobile/>} path='/success'/>
                            </Routes>
                            :
                            <Routes>
                                <Route element={<Home/>} path='/'/>
                                <Route element={<Success/>} path='/success'/>
                            </Routes>

                    }
            </RoutesProvider>
        </BrowserRouter>
    )
}