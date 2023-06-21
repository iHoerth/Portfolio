import styles from './Card.module.css';
import Link from 'next/link';

const Card = ({ title, link, description, thumbnail }) => {
  return (
    <div className={styles.card}>
      <header className={styles.header}>{title}</header>
      <Link href={link}>
        <section className={styles.content}>
          <img style={{ width: '50%' }} src={thumbnail} alt="" />
          <div>{link}</div>
          <div>{description}</div>
        </section>
      </Link>
    </div>
  );
};

export default Card;
