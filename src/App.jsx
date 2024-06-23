import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import NotFound from './Components/NotFound/NotFound'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import style from './App.module.css'



const routes = createBrowserRouter([
    {
        path: '', element: <Layout />, children: [
            { path: '', element: <Home /> },
            { path: 'home', element: <Home /> },
            { path: '*', element: <NotFound /> },
        ]
    }
])

export default function App() {
    return <>
        <DndProvider backend={HTML5Backend}>
            <div className={style.App}>
                <RouterProvider router={routes}>
                </RouterProvider>
            </div>
        </DndProvider>
    </>

}
