function SocialLinks() {

    return (
        <div className={"social-links"}>
            <ul>
                <li><a href={"https://github.com/sobczyk-m"} rel={"noreferrer"} aria-label={"GitHub"} target={"_blank"}>
                    <i className="fa-brands fa-github"></i>
                </a>
                </li>
                <li><a href={"https://www.linkedin.com/in/marcin-sobczyk/"} rel={"noreferrer"} aria-label={"LinkedIn"}
                       target={"_blank"}>
                    <i className="fa-brands fa-linkedin"></i>
                </a></li>
                <li><a href={"mailto:marcin.sobczyk.dev@gmail.com"} rel={"noreferrer"} aria-label={"E-mail"}
                       target={"_blank"}>
                    <i className="fa-solid fa-envelope-open-text"></i>
                </a></li>
            </ul>
        </div>
    )
}

export default SocialLinks