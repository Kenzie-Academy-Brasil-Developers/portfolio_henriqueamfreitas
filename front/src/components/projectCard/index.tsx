interface ProjectCardProps {
    name: string;
    language: string;
    description: string;
    html_url: string;
    ssh_url: string;
    id: number
  }

export const ProjectCard = ( {name, language, description, html_url, ssh_url, id}: ProjectCardProps ) => {
    return(
        <li key={id}>
            <h3>{name}</h3>
            <p>Linguagens: {language}</p>
            <p>{description}</p>
            <div>
                <a href={html_url}>Github Code</a>
                <a href={ssh_url}>Aplicação</a>
            </div>
        </li>
    )   
}