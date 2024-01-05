interface ProjectCardProps {
    name: string;
    language: string;
    description: string;
    html_url: string;
    svn_url: string;
    id: number
  }

export const ProjectCard = ( {name, language, description, html_url, svn_url, id}: ProjectCardProps ) => {
    return(
        <li key={id}>
            <h3>{name}</h3>
            <p>Linguagens: {language}</p>
            <p>{description}</p>
            <div>
                <a href={html_url} target="blank">Github Code</a>
                <a href={svn_url} target="blank">Aplicação</a>
            </div>
        </li>
    )   
}