import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasePage from "./pages/PaginaBase";
import Home from "./pages/Home";
import Details from "./pages/Details";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path="/produto" element={<Details/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}