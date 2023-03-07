import authorPhoto from "../assets/images/Author-photo.jpg"
import TechStack from "../components/TechStack"
import Navbar from "../components/Navbar"

function About(props) {
    return (
        <div>
            <header id="header">
                < Navbar active={"nav-about"}/>
            </header>
            <div className={"bio-wrapper"}>
                <div className={"message-container"}>
                    <h1 onAnimationEnd={event => props.onAnimationEnd(event)}>{"< "}Hello World{" />"}</h1>
                    <p id={"paragraph-1"} onAnimationEnd={event => props.onAnimationEnd(event)}>
                        Hi! I'm Marcin. Just some random guy that loves technology, solving problems and creating stuff.
                        One day I combined these three factors together and found myself on the programmer path.
                        {"\n"}Currently, I concentrate my efforts on learning the best practices of Web Development and
                        I spend
                        my spare time working on personal projects in this field.
                    </p>
                    <p id={"paragraph-2"} onAnimationEnd={event => props.onAnimationEnd(event)}>
                        What’s more about me. I'm a well-organized and self-disciplined person.
                        I enjoy working as a team and I'm not afraid of working on independent tasks.
                    </p>
                    <p id={"paragraph-3"} onAnimationEnd={event => props.onAnimationEnd(event)}>I'm looking for
                        professional opportunities in developer positions that will allow me to work on
                        interesting Front-End projects.</p>
                    <p id={"paragraph-4"} onAnimationEnd={event => props.onAnimationEnd(event)}>My Tech Stack:</p>
                    <TechStack onAnimationEnd={event => props.onAnimationEnd(event)}/>
                </div>
                <img className={"image"} src={authorPhoto} height={"500px"} alt="Website author"
                     onAnimationEnd={event => props.onAnimationEnd(event)}/>
            </div>
        </div>
    )
}

export default About