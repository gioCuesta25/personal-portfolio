import { ProjectsModel } from '@/models';
import styles from '@/styles/Portfolio.module.css';

interface Props {
  project: ProjectsModel;
}

const ProjectItem = ({ project }: Props) => {
  return (
    <div className={styles.project_item}>
      <p className={styles.project_title}>{project.title}</p>
      <p className={styles.project_description}>{project.description}</p>
      <div className={styles.project_stack}>
        {project.stack.map((item, index) => (
          <div className={styles.stack_item} key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className={styles.project_link}>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Ver proyecto
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
