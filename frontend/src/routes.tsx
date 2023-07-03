import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasePage from "./pages/PaginaBase";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Produto from "./pages/Produto";
import Cliente from "./pages/Cliente";
import Fabricante from "./pages/Fabricante";
import Relatorio from "./pages/Relatorio";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path="/produto" element={<Produto/>}></Route>
                    <Route path="/produto/:id" element={<Details/>}></Route>
                    <Route path="/cliente" element={<Cliente/>}></Route>
                    <Route path="/fabricante" element={<Fabricante/>}></Route>
                    <Route path="/relatorio" element={<Relatorio/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}