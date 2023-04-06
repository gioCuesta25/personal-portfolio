import DownloadIcon from '@/assets/DownloadIcon';
import { CV_URL } from '@/constants';
import styles from '@/styles/HomeText.module.css';
import { openUrlInNewTab } from '@/utils';

const HomeText = () => {
  return (
    <div className={styles.home_text_container}>
      <div className={styles.greeting_container}>👋 Hola</div>
      <div className={styles.name}>
        <p>Giovanni</p>
        <p>Romaña</p>
      </div>
      <div className={styles.profession}>
        <p>Desarrollador de software</p>
      </div>
      <div className={styles.curriculum}>
        <button
          onClick={() => openUrlInNewTab(CV_URL)}
          className={styles.download_container}
        >
          <DownloadIcon />
          <span>Descargar CV</span>
        </button>
      </div>
    </div>
  );
};

export default HomeText;
