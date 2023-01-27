import projects from "../projectsCollection"
import Navbar from "../Components/Navbar"
import React from "react"
import authorPhoto from "../images/author-photo.jpg"

function Projects() {

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
                        <a href={project.codeLink} rel="noreferrer" target={"_blank"}><i
                            className="fa-solid fa-code project-icon"></i></a>
                        <a href={project.playgroundLink} rel="noreferrer" target={"_blank"}><i
                            className="fa-solid fa-up-right-from-square project-icon"></i></a>
                    </div>
                    <img className={"project-image"} src={project.imageLink} alt="Project preview"/>
                </li>
            )
        )
    }

    return (
        <div>
            <header id="header">
                < Navbar active={"nav-projects"}/>
            </header>
            <div className={"projects-wrapper"}>
                 <h1>{"< "}Some Things I’ve Built{" />"}</h1>
                <ul className={"projects-container"}>
                    {creatProjectsList()}
                </ul>
            </div>
        </div>
    )
}

export default Projects