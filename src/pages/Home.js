import Navbar from "../components/Navbar"

function Home(props) {
    return (
        <div>
            <header id="header">
                < Navbar active={"nav-home"}/>
            </header>
            <div id={"home-container"}>
                <div id={"hello"} onAnimationEnd={event => props.onAnimationEnd(event)}>
                    <h1>
                        Hi there,
                    </h1>
                </div>
                <div id={"introduction-1"} onAnimationEnd={event => props.onAnimationEnd(event)}>
                    <h2>
                        My name is <span className={"text-highlight"}>Marcin Sobczyk</span>
                    </h2>
                </div>
                <div id={"introduction-2"} onAnimationEnd={event => props.onAnimationEnd(event)}>
                    <h3>
                        I am self taught Front-End Developer
                    </h3>
                </div>
            </div>
            <footer className={"home-footer"}>
                <i onAnimationEnd={event => props.onAnimationEnd(event)} id={"secret-programmer"}
                   className="fa-solid fa-user-secret"></i>
            </footer>
        </div>
    )
}

export default Home