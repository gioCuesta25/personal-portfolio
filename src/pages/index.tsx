import styles from '../styles/Home.module.css';
import CodeIcon from '@/assets/CodeIcon';
import DownloadIcon from '@/assets/DownloadIcon';
import SocialMedias from '@/components/SocialMedias';

export default function Home() {
  return (
    <div className={styles.main_container}>
      <SocialMedias />
    </div>
  );
}
