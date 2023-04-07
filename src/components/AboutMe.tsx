import React from 'react';
import styles from '@/styles/AboutMe.module.css';

const AboutMe = () => {
  return (
    <div className={styles.aboutme_container}>
      <div className={styles.greeting_container}>🤔 Sobre mi</div>
      <p className={styles.name}>Giovanni Romaña</p>
      <p className={styles.description}>
        Soy un apasionado desarrollador de software con experiencia en diversas
        tecnologías y lenguajes de programación. Me dedico a crear soluciones de
        software innovadoras y eficientes que satisfagan las necesidades de los
        clientes. Me enorgullece trabajar en equipo y colaborar con otros
        desarrolladores para lograr los objetivos del proyecto. Además, me gusta
        estar siempre actualizado en las últimas tendencias en tecnología y
        aprender cosas nuevas constantemente. Me considero un profesional
        responsable y comprometido con la calidad y el éxito del proyecto en el
        que trabajo. Si necesitas un desarrollador confiable y con habilidades
        técnicas sólidas, estoy seguro de que puedo ayudarte a llevar tu
        proyecto al siguiente nivel.
      </p>
    </div>
  );
};

export default AboutMe;
