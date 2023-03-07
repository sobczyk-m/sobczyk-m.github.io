function TechStack(props) {

    return (
        <div className={"tech-stack"} onAnimationEnd={event => props.onAnimationEnd(event)}>
            <ul>
                <li><i className="fa-brands fa-react">
                    <div className={"tech-name-container"}><p className={"tech-name"}>React</p></div>
                </i></li>
                <li><i className="fa-brands fa-square-js">
                    <div className={"tech-name-container"}><p className={"tech-name"}>JavaScript</p></div>
                </i></li>
                <li><i className="fa-brands fa-git-alt">
                    <div className={"tech-name-container"}><p className={"tech-name"}>Git</p></div>
                </i></li>
                <li><i className="fa-brands fa-html5">
                    <div className={"tech-name-container"}><p className={"tech-name"}>HTML</p></div>
                </i></li>
                <li><i className="fa-brands fa-css3-alt">
                    <div className={"tech-name-container"}><p className={"tech-name"}>CSS</p></div>
                </i></li>
            </ul>
        </div>
    )
}

export default TechStack