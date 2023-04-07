import React from 'react';
import styles from '@/styles/Portfolio.module.css';
import ProjectItem from './ProjectItem';
import { PROJECTS } from '@/constants';

const Portfolio = () => {
  return (
    <div className={styles.portfolio_container}>
      <div className={styles.greeting_container}>🔗 Portfolio</div>
      <p className={styles.title}>Trabajos y proyectos</p>
      <div className={styles.projects}>
        {PROJECTS.map((item, index) => (
          <ProjectItem key={index} project={item} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
