import authorPhoto from "../author-photo.jpg"
import TechStack from "../Components/TechStack"

function About() {
    return (
        <div>
            <div className={"wide-wrapper"}>
                <div className={"message-container"}>
                    <h1>{"< "}Hello World{" />"}</h1>
                    <span className={"text-highlight"}></span>
                    <p>
                        Hi! I'm Marcin. Just some random guy that loves technology, solving problems and creating stuff.
                        One day I combined these three factors together and found myself on the programmer path.
                        {"\n"}Currently, I concentrate my efforts on learning the best practices of Web Development, and
                        I spend
                        my spare time working on personal projects in this field.
                    </p>
                    <p>
                        What’s more about me. I'm a well-organized and self-disciplined person.
                        I enjoy working as a team and I'm not afraid of working on independent tasks.
                    </p>
                    <p>I'm looking for professional opportunities in developer positions that will allow me to work on
                        interesting Front-End projects.</p>
                    <p>My Tech Stack:</p>
                    <TechStack/>
                </div>
                <img className={"image"} src={authorPhoto} height={"500px"} alt="Photo of website author"/>
            </div>
        </div>
    )
}

export default About