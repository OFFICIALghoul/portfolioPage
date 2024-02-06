import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Routes,
    createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./features/homepage/homepage";
import About from "./features/about/about";



const routers = createBrowserRouter(createRoutesFromElements(
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
    </Routes>
))


export default function App() {
    return (
        <RouterProvider router={routers} />
    );
}
