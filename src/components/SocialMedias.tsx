import GithubIcon from '@/assets/GithubIcon';
import LinkedinIcon from '@/assets/LinkedinIcon';
import { SocialMedias } from '@/models';
import styles from '@/styles/SocialMedias.module.css';

const SOCIAL_MEDIAS: SocialMedias[] = [
  { icon: <GithubIcon />, link: 'https://github.com/gioCuesta25' },
  {
    icon: <LinkedinIcon />,
    link: 'https://www.linkedin.com/in/giovanni-roma%C3%B1a/',
  },
];

const SocialMedias = () => {
  return (
    <div className={styles.social_main_container}>
      {SOCIAL_MEDIAS.map((item, index) => (
        <a href={item.link} target="_blank">
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedias;
