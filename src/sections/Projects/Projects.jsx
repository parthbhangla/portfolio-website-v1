import styles from "./ProjectsStyles.module.css";
import FA from "../../assets/Football-Analysis.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={FA}
          link="https://github.com/parthbhangla/Tennis-Analysis"
          h3="Football Analysis"
          p="Description"
        />
        <ProjectCard
          src={FA}
          link="https://github.com/parthbhangla/wordle-solver"
          h3="Wordle-Solver"
          p="Description"
        />
        <ProjectCard
          src={FA}
          link="https://github.com/parthbhangla/Monkeytype-Cheat"
          h3="Monkeytype-Cheat"
          p="Description"
        />
        <ProjectCard
          src={FA}
          link="https://github.com/parthbhangla/portfolio-website-v1"
          h3="Portfolio Website"
          p="Description"
        />
      </div>
    </section>
  );
}

export default Projects;
