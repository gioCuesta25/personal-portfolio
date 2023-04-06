import GithubIcon from '@/assets/GithubIcon';
import LinkedinIcon from '@/assets/LinkedinIcon';
import { GITHUB_URL, LINKEDIN_URL } from '@/constants';
import { SocialMedias } from '@/models';
import styles from '@/styles/SocialMedias.module.css';

const SOCIAL_MEDIAS: SocialMedias[] = [
  { icon: <GithubIcon />, link: GITHUB_URL },
  {
    icon: <LinkedinIcon />,
    link: LINKEDIN_URL,
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
