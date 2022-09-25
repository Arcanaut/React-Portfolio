import "./project.css";
import Portfolio from "../Portfolio/portfolio";
import { projects } from "../projectData";

//TODO: Have tabs change color depending on last one clicked to show where user is
//TODO: potentially make black background dynamic like contact form
const Project = () => {
    return (
        <div className="list">
            <div className="list-texts">
                <h1 className="list-title">Projects</h1>
                <p className="list-description">

                </p>
            </div>
            <div className="list-list">
                {projects.map((item) => (
                    <Portfolio key={item.id}  title={item.title} img={item.img} collab={item.collab} description={item.description} skills={item.skills} link={item.link} github={item.github} />
                ))}
                
            </div>
        </div>
    )
}

export default Project;