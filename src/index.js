import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import {HashRouter, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"

const makeElementVisible = (event) => {
    event.target.style.visibility = "visible"
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path={"/"} element={<Home onAnimationEnd={makeElementVisible}/>}></Route>
                <Route path={"/about"} element={<About/>}></Route>
                <Route path={"/projects"} element={<Projects/>}></Route>
                <Route path={"/contact"} element={<Contact/>}></Route>
            </Routes>
        </HashRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
