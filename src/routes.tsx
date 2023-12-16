import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Success from "./pages/Success/Success";
import {RoutesProvider} from "./store/GlobalState";

export default function AppRouter() {
    return(
        <BrowserRouter>
            <RoutesProvider>
                <Routes>
                    <Route element={<Home/>} path='/'/>
                    <Route element={<Success/>} path='/success'/>
                </Routes>
            </RoutesProvider>
        </BrowserRouter>
    )
}