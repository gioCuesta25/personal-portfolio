import Experience from '@/components/Experience';
import styles from '@/styles/Home.module.css';
import HomeText from '@/components/HomeText';
import SocialMedias from '@/components/SocialMedias';
import AboutMe from '@/components/AboutMe';

export default function Home() {
  return (
    <div className={styles.main_container}>
      <SocialMedias />
      <HomeText />
      <Experience />
      <AboutMe />
    </div>
  );
}
