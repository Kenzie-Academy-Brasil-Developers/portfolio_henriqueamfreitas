import { ProjectCard } from "../projectCard" 
type GitHubRepository = {
    name: string;
    language: string;
    description: string
    html_url: string;
    svn_url: string;
    id: number
  };
  

export function ProjectList({ allProjects }: { allProjects: GitHubRepository[] }){
    return(
        <ul>
            {
                allProjects.map(project => {
                    return(
                        <ProjectCard 
                            key={project.id}
                            name={project.name}
                            language={project.language}
                            description={project.description}
                            html_url={project.html_url}
                            svn_url={project.svn_url}
                            id={project.id}
                        ></ProjectCard>
                    )
                })
            }
        </ul>
    )
}