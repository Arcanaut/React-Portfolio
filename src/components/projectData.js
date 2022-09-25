import WorkDay from "../images/WorkDay.png";
import budgetTracker from "../images/budgetTracker.png";
import techBlog from "../images/techBlog.png";
import noteTaker from "../images/noteTaker.png";




export const projects = [
    {
        id: 1,
        img: WorkDay,
        title: "Work Day Scheduler",
        description: "An app for keeping track of tasks through out your day.",
        skills: "Built with: HTML / Javascript / CSS /",
        link: "https://arcanaut.github.io/Work-Day-Scheduler/",
        github: "https://github.com/Arcanaut/Work-Day-Scheduler",
    },
    {
        id: 2,
        title: "Budget Tracker",
         img: budgetTracker,
        description: "A budgeting app that tracks money gained and money loss over time and builds a graph to represent the account history.",
        skills: "Built with: HTML / CSS / Node.js / ",
        link: "https://stormy-everglades-34049.herokuapp.com/",
        github: "https://github.com/Arcanaut/Budget-Tracker",
    },

    {
        id: 3,
        title: "Hello Word!",
        img: techBlog,
        description: "A techblog that allows the user to create an account, posts, and comments.",
        skills: "Built with: HTML / CSS / JavaScript / Node.js / MySql / mySql2 / Mongoose / Express / Express-Handlebars / Handlebars /",
        link: "https://obscure-woodland-17062.herokuapp.com/",
        github: "https://github.com/Arcanaut/tech-blog",
    },

    {
        id: 4,
        title: "Note Taker",
        img: noteTaker,
        description: "An app for keeping and saving notes",
        skills: "Built with: HTML / CSS / JavaScript / Node.js / Express / uuid /",
        link: "https://dry-atoll-32803.herokuapp.com/",
        github: "https://github.com/Arcanaut/Note-Taker",
    },
    
];

export default projects;