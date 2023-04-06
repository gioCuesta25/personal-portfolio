import Experience from '@/components/Experience';
import styles from '../styles/Home.module.css';
import HomeText from '@/components/HomeText';
import SocialMedias from '@/components/SocialMedias';

export default function Home() {
  return (
    <div className={styles.main_container}>
      <SocialMedias />
      <HomeText />
      <Experience />
    </div>
  );
}
