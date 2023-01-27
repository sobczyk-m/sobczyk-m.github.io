import {Link} from "react-router-dom"
import {useEffect} from "react"

function Navbar(props) {

    useEffect(() => {
        document.getElementById(props.active).classList.add("active")
        console.log("did run")
    }, [])

    return (
        <nav className={"navbar"}>
            <ul>
                <li><Link id={"nav-home"} className={"nav-link"} to={"/"}>Home</Link></li>
                <li><Link id={"nav-about"} className={"nav-link"} to={"/about"}>About</Link></li>
                <li><Link id={"nav-projects"} className={"nav-link"} to={"/projects"}>Projects</Link></li>
                <li><Link id={"nav-contact"} className={"nav-link"} to={"/contact"}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar