import SocialLinks from "../Components/SocialLinks"

function Contact() {
    return (
        <div>
            <div className={"wrapper"}>
                <h1>Let's Get In Touch</h1>
                <p><span className={"text-highlight"}>I'm looking for new job opportunities</span>. Hit me up
                    if you have some questions or want to work together. I'll try to get back to you as soon as I can.
                </p>
                <h2>Here are my Socials</h2>
                <footer>
                    <SocialLinks/>
                </footer>
            </div>
        </div>
    )
}

export default Contact