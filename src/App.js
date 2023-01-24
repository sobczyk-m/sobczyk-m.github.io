import './App.css'
import Navbar from "./Navbar"
import SocialLinks from "./SocialLinks"
// import dude from "./programmingDude.svg"


function App() {
    return (
        <div>
            <header id="header">
                < Navbar/>
            </header>
            <div id={"home-container"}>
                <div id={"hello"}><h1>Hi there,</h1></div>
                <div id={"introduction-1"}><h2>My name is <span className={"text-highlight"}>Marcin Sobczyk</span></h2></div>
                <div id={"introduction-2"}><h3>I am self taught Front-End Developer</h3></div>
            </div>
            <footer className={"home-footer"}>
                <SocialLinks/>
                <i id={"secret-programmer"} className="fa-solid fa-user-secret"></i>
            </footer>
        </div>
    )
}

export default App
