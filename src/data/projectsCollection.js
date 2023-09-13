// import quoteMachine from "../assets/images/Quote-Machine.png"
// import markdownPreviewer from "../assets/images/Markdown-Previewer.png"
// import drumMachine from "../assets/images/Drum-Machine.png"
import calculator from "../assets/images/Calculator.png"
import weatherApp from "../assets/images/Weather-App.png"
import personalWebsite from "../assets/images/Personal-Website.png"
import simpleDaysCounter from "../assets/images/Simple-Days-Counter.png"

const projects = [
    {
        name: "Weather App",
        description: "Check the weather conditions anywhere in the world",
        techStack: ["React", "TypeScript", "Redux", "PostCSS", "HTML", "CSS"],
        imageLink: weatherApp,
        githubLink: "https://github.com/sobczyk-m/Weather-App",
        codeLink: null,
        playgroundLink: "https://sobczyk-m-weather-app.netlify.app/"
    },
    {
        name: "Calculator",
        description: "Make your life much easier with this simple calculator",
        techStack: ["React", "JavaScript", "Jest", "SASS", "HTML", "CSS"],
        imageLink: calculator,
        githubLink: "https://github.com/sobczyk-m/Calculator",
        codeLink: "https://codesandbox.io/s/8mp1o0",
        playgroundLink: "https://8mp1o0.csb.app"
    },
    {
        name: "Personal Website",
        description: "Visit my personal website to learn more about me and my work",
        techStack: ["React", "JavaScript", "SASS", "HTML", "CSS"],
        imageLink: personalWebsite,
        githubLink: "https://github.com/sobczyk-m/sobczyk-m.github.io",
        codeLink: null,
        playgroundLink: "https://sobczyk-m.github.io/"
    },
    {
        name: "Simple Days Counter",
        description: "A simple Android application to store and remind you of important dates in your life",
        techStack: ["Kotlin", "Room", "Android"],
        imageLink: simpleDaysCounter,
        githubLink: "https://github.com/sobczyk-m/simple-days-counter",
        codeLink: null,
        playgroundLink: null
    }
    // {
    //     name: "Drum Machine",
    //     description: "Use the drum machine to produce your own tunes.",
    //     techStack: ["React", "JavaScript", "HTML", "CSS"],
    //     imageLink: drumMachine,
    //     githubLink: "https://github.com/sobczyk-m/Drum-Machine",
    //     codeLink: "https://codesandbox.io/s/vx5pzu",
    //     playgroundLink: "https://vx5pzu.csb.app/"
    // },
    // {
    //     name: "Quote Machine",
    //     description: "Get your life inspired by some random quotes.",
    //     techStack: ["React", "JavaScript", "jQuery", "HTML", "CSS"],
    //     imageLink: quoteMachine,
    //     githubLink: "https://github.com/sobczyk-m/Quote-Machine",
    //     codeLink: "https://codesandbox.io/s/8h0wjb",
    //     playgroundLink: "https://8h0wjb.csb.app/"
    // },
    // {
    //     name: "Markdown Previewer",
    //     description: "Check out your writing once you've added the markdown syntax.",
    //     techStack: ["React", "JavaScript", "HTML", "CSS"],
    //     imageLink: markdownPreviewer,
    //     githubLink: "https://github.com/sobczyk-m/Markdown-Previewer",
    //     codeLink: "https://codesandbox.io/s/zd9r94",
    //     playgroundLink: "https://zd9r94.csb.app/"
    // }
]

export default projects