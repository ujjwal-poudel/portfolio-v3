import project from "./project";

function Project() {
    return (
        <>
            {project.map((project, index) => (
                <div key={index}>
                    {/* Project title, techstacks and web link */}
                    <div>
                        <div>
                            {/* Project name and tech stacks */}
                            <h1>{project.name}</h1>
                            <div>
                                {project.techStacks.map((tech, techIndex) => (
                                    <div key={techIndex}>{tech}</div>
                                ))}
                            </div>
                        </div>

                        {/* project web link */}
                        <div>
                            <a href={project.link}>{project.name}</a>
                        </div>
                    </div>

                    {/* Project description */}
                    <div>
                        <p>{project.description}</p>
                    </div>

                    {/* Project links */}
                    {project.projectLinks.map((link, linkIndex) => (
                        <div key={linkIndex}><a href={link.url}>{link.title}</a></div>
                    ))}

                </div>
            ))}
        </>
    );
}

export default Project;
