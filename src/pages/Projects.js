import projects from "../data/projectsCollection"
import Navbar from "../components/Navbar"
import React from "react"

function Projects() {
    const makeElementVisible = (event) => {
        event.target.style.opacity = "1"
    }

    const middleIconStyle = {
        marginLeft: "auto"
    }

    const creatProjectsList = () => {
        return projects.map(project => (
                <li key={project.name} className={"project"}>
                    <h1 className={"project-header"}>{project.name}</h1>
                    <p className={"project-description"}>{project.description}</p>
                    <div className={"project-tech-stacks-container"}>
                        {project.techStack.map(techStack => (
                            <p key={techStack} className={"project-tech-stack"}>{techStack}</p>))}
                    </div>
                    <div className={"project-bottom-bar"}>
                        <a id="github" href={project.githubLink} rel="noreferrer" target={"_blank"}><i
                            className="fa-brands fa-github project-icon"></i></a>
                        {project.codeLink ?
                            <a href={project.codeLink} rel="noreferrer" target={"_blank"}
                               style={middleIconStyle}><i className="fa-solid fa-code project-icon"></i></a> : null}
                        {project.playgroundLink ?
                            <a href={project.playgroundLink} rel="noreferrer" target={"_blank"}><i
                                className="fa-solid fa-up-right-from-square project-icon"></i></a> : null}
                    </div>
                    <img className={"project-image"} src={project.imageLink} alt="Project preview"/>
                </li>
            )
        )
    }

    return (
        <div>
            <header className="header">
                < Navbar active={"nav-projects"}/>
            </header>
            <div className={"projects-wrapper"}>
                <h1 onAnimationEnd={event => makeElementVisible(event)}>{"< "}Some Things I’ve Built{" />"}</h1>
                <ul className={"projects-container"} onAnimationEnd={event => makeElementVisible(event)}>
                    {creatProjectsList()}
                </ul>
            </div>
        </div>
    )
}

export default Projects