import SocialLinks from "../Components/SocialLinks"
import Navbar from "../Components/Navbar"
import React from "react"

function Contact() {
    return (
        <div>
            <header id="header">
                < Navbar active={"nav-contact"}/>
            </header>
            <div className={"contact-wrapper"}>
                <h1>{"< "}Let's Get In Touch{" />"}</h1>
                <p><span className={"text-highlight"}>I'm looking for new job opportunities</span>. Hit me up
                    if you have some questions or want to work together. I'll try to get back to you as soon as I can.
                </p>
                <h2>Here are my socials:</h2>
                <footer>
                    <SocialLinks/>
                </footer>
            </div>
        </div>
    )
}

export default Contact