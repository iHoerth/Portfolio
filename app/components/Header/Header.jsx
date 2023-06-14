import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <section className={styles.header}>
        <h1>IGNACIO HOERTH</h1>
        <p>
          Soy un desarrollador fullstack, egresado del bootcamp Soyhenry, enfocado en el stack PERN.
          Autodidacta, con mucha facilidad para entender cosas nuevas y siempre en busca del
          aprendizaje y la mejora .
        </p>
        <button className={styles.button}>CONTACT ME</button>
      </section>
      <section className={styles.header}>
        <h1>OTRO CONTENIDO / AVATAR</h1>
        <p>
          Hola soy un contenido adicional o un avatar. Hola soy un contenido adicional o un avatar.
          Hola soy un contenido adicional o un avatar.
        </p>
        <button className={styles.button}>CONTACT ME</button>
      </section>
    </header>
  );
};

export default Header;
