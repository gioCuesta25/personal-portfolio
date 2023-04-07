import React from 'react';
import Experience from '@/components/Experience';
import styles from '@/styles/Home.module.css';
import HomeText from '@/components/HomeText';
import SocialMedias from '@/components/SocialMedias';
import AboutMe from '@/components/AboutMe';
import Portfolio from '@/components/Portfolio';

export default function Home() {
  return (
    <div className={styles.main_container}>
      <SocialMedias />
      <HomeText />
      <Experience />
      <AboutMe />
      <Portfolio />
    </div>
  );
}
