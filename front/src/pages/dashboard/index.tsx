import axios from "axios";
import { useEffect, useState } from "react";
import { ProjectList } from "../../components/projectList"
import { StyledHeader, StyledFirstSection, StyledSecondSection, StyledThirdSection, StyledFooter } from '../dashboard/style.ts'

export const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    // const img = projects[0].owner.avatar_url
    useEffect(() => {
      const fetchGitHubProjects = async () => {
        try {
          const username = 'Henriqueamfreitas'
  
          const response = await axios.get(`https://api.github.com/users/${username}/repos`);

          setProjects(response.data);
        } catch (error) {
          console.error('Erro ao buscar projetos do GitHub:', error);
        }
      };
  
      fetchGitHubProjects();
    }, [])
    return (
        <>
        <StyledHeader className="">
            <div>
                {/* <img src={img} alt="" /> */}
                <h1>Henrique Annicchino</h1>
            </div>
            <div>
                <a href="https://w.app/nYQSLN">Falar no Whatsapp</a>
                <a href="https://github.com/Henriqueamfreitas">
                    <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png" alt="Github" />
                </a>
                <a href="https://www.linkedin.com/in/henrique-annicchino/">
                    <img src="https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668700_640.png" alt="Linkedin" />
                </a>
            </div>
        </StyledHeader>
        <main>
            <StyledFirstSection>
                <div>
                    <h2>Criando experiências por meio da tecnologia</h2>
                    <p>
                        Sou estudante de programação na Kenzie Academy Brasil, participei de diversos projetos 
                        resolvendo problemas de alto nível e desenvolvendo habilidades
                    </p>
                </div>
            </StyledFirstSection>
            <StyledSecondSection>
                <div>
                    <h2>Ferramentas que domino</h2>
                    <div>
                        <img src="https://cdn.pixabay.com/photo/2016/11/19/22/25/html5-1841458_1280.png" alt="html" />
                        <img src="https://cdn.pixabay.com/photo/2016/11/19/23/00/css3-1841590_640.png" alt="css" />
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_640.png" alt="js" />
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png" alt="" />
                    </div>
                </div>
            </StyledSecondSection>
            <StyledThirdSection>
                <div>
                    <h2>Vamos trocar uma ideia?</h2>
                    <p>
                    No linkedIn sempre estou <b>compartilhando</b> meus processos diários para desenvolver esses 
                    projetos e estou disposto a trocar algumas ideias por lá
                    </p>
                    <a href="https://www.linkedin.com/in/henrique-annicchino/">Acessar perfil no linkedin</a>
                </div>
                <div>
                    <h2>Projetos</h2>
                    <h3>Originalidade e dedicação em cada detalhe</h3>
                    <ProjectList allProjects={projects}></ProjectList>
                </div>
            </StyledThirdSection>
        </main>
        <StyledFooter>
            Obrigado por acessar!
        </StyledFooter>
        </>
    )
}
