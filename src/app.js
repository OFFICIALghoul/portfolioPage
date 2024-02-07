import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./features/homepage/homepage";
import About from "./features/about/about";


const routers = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" element={<About />} />
    </Route>
))


export default function App() {
    return (
        <RouterProvider router={routers} />
    );
}
