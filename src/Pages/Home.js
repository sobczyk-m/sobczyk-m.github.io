import Navbar from "../Components/Navbar"
import React from "react"

function Home() {
    return (
        <div>
            <header id="header">
                < Navbar active={"nav-home"}/>
            </header>
            <div id={"home-container"}>
                <div id={"hello"}><h1>Hi there,</h1></div>
                <div id={"introduction-1"}><h2>My name is <span className={"text-highlight"}>Marcin Sobczyk</span></h2>
                </div>
                <div id={"introduction-2"}><h3>I am self taught Front-End Developer</h3></div>
            </div>
            <footer className={"home-footer"}>
                <i id={"secret-programmer"} className="fa-solid fa-user-secret"></i>
            </footer>
        </div>
    )
}

export default Home