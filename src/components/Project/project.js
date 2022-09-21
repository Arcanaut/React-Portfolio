import "./project.css";
import Portfolio from "../Portfolio/portfolio";
import {projects} from "../projectData";

const Project = () => {
    return (
        <div className="list">
            <div className="list-texts">
                <h1 className="list-title">projects</h1>
                <p className="list-description">

                </p>
            </div>
            <div className="list-list">
                {projects.map((item) => (
                    <Portfolio key={item.id} img={item.img} title={item.title} collab={item.collab} description={item.description} skills={item.skills} link={item.link} github={item.github} />
                ))}
                
            </div>
        </div>
    )
}

export default Project;