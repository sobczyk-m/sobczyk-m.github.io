import {FaCss3Alt, FaGitAlt, FaHtml5, FaJava, FaReact} from "react-icons/fa";
import {SiJetbrains, SiKotlin, SiPostman, SiPython, SiSpringboot} from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io5";
import {IoLogoSass} from "react-icons/io";
import {TbSql} from "react-icons/tb";
import {TfiAndroid} from "react-icons/tfi";

function TechStack(props) {

    return (
        <div className={"tech-stack"} onAnimationEnd={event => props.onAnimationEnd(event)}>
            <ul>
                <li className={"tech-icon"}>
                    <FaJava/>
                    <div className={"tech-name-container"}><p className={"tech-name"}>Java</p></div>
                </li>
                <li className={"tech-icon"}>
                    <SiKotlin/>
                    <div className={"tech-name-container"}><p className={"tech-name"}>Kotlin</p></div>
                </li>
                <li className={"tech-icon"}>
                    <SiPython/>
                    <div className={"tech-name-container"}><p className={"tech-name"}>Python</p></div>
                </li>
                <li className={"tech-icon"}>
                    <IoLogoJavascript/>
                    <div className={"tech-name-container"}><p className={"tech-name"}>JavaScript</p></div>
                </li>
                <li className={"tech-icon"}>
                    <TbSql/>
                    <div className={"tech-name-container"}><p className={"tech-name"}>SQL</p></div>
                </li>
                <li className={"tech-icon"}>
                    <TfiAndroid/>
                    <div className={"tech-name-container"}><p className={"tech-name"}>Android</p></div>
                </li>
                <li className={"tech-icon"}>
                    <SiSpringboot/>
                    <div className={"tech-name-container"}><p className={"tech-name"}>Spring Boot</p></div>
                </li>
                <li className={"tech-icon"}>
                    <FaReact/>
                    <div className={"tech-name-container"}><p className={"tech-name"}>React</p></div>
                </li>
                <li className={"tech-icon"}>
                    <FaGitAlt/>
                    <div className={"tech-name-container"}><p className={"tech-name"}>Git</p></div>
                </li>
                <li className={"tech-icon"}>
                    <SiPostman/>
                    <div className={"tech-name-container"}><p className={"tech-name"}>Postman</p></div>
                </li>
                <li className={"tech-icon"}>
                    <FaCss3Alt/>
                    <div className={"tech-name-container"}><p className={"tech-name"}>CSS</p></div>
                </li>
                <li className={"tech-icon"}>
                    <FaHtml5/>
                    <div className={"tech-name-container"}><p className={"tech-name"}>HTML</p></div>
                </li>
                <li className={"tech-icon"}>
                    <IoLogoSass/>
                    <div className={"tech-name-container"}><p className={"tech-name"}>Sass</p></div>
                </li>
                <li className={"tech-icon"}>
                    <SiJetbrains/>
                    <div className={"tech-name-container"}><p className={"tech-name"}>JetBrains IDEs</p></div>
                </li>
            </ul>
        </div>
    )
}

export default TechStack