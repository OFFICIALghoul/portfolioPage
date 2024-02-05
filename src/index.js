import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
} from "react-router-dom";


const routers = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<HomePage />}>
        
    </Route>
))


export default function App() {
    return (
        <RouterProvider router={routers} />
    );
}
