import React from 'react';
import './portfolio.css';


const Portfolio = ({img, title, collab, description, skills, link, github}) => {
    return (
        <div className="portfolio">
            <div className="portfolio-browser">
                <div className="portfolio-circle"></div>
                <div className="portfolio-circle"></div>
                <div className="portfolio-circle"></div>
            </div>
            <img src={img} alt="" className="portfolio-img" />
            <div className="project-info">
                <div className="project-title">
                    <h1>{title}</h1>
                </div>
                <div className="project-collab">
                    <p>{collab}</p>
                </div>
                <div className="project-description">
                    <p>{description}</p>
                </div>
                <div className="skills-used">
                    <p>{skills}</p>
                </div>
                <div className="project-links">
                    <a className="live-btn" href={link} target="_blank" rel="noreferrer">
                        live site
                    </a>
                    <a className="git-btn" href={github} target="_blank" rel="noreferrer">
                        github
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;