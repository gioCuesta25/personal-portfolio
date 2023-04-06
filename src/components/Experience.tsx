import CodeIcon from '@/assets/CodeIcon';
import { ExperienceModel } from '@/models';
import styles from '@/styles/Experience.module.css';
import ExperienceItem from './ExperienceItem';

const WORK_EXPERIENCE: ExperienceModel[] = [
  { icon: <CodeIcon />, years: '2', position: 'Desarrolador de software' },
];
const Experience = () => {
  return (
    <div className={styles.experience_container}>
      {WORK_EXPERIENCE.map((item, index) => (
        <ExperienceItem item={item} key={index} />
      ))}
    </div>
  );
};

export default Experience;
