import { ExperienceModel } from '@/models';
import styles from '@/styles/Experience.module.css';

interface Props {
  item: ExperienceModel;
}

const ExperienceItem = ({ item }: Props) => {
  return (
    <div className={styles.dev_card}>
      <div>{item.icon}</div>
      <p className={styles.experience_years}>{item.years} años como</p>
      <p className={styles.experience_position}>{item.position}</p>
    </div>
  );
};

export default ExperienceItem;
