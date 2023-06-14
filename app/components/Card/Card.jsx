import styles from './Card.module.css'
import Link from 'next/link'

const Card = ({title, link, description}) => {
  return (
    <div className={styles.card}>
      <header className={styles.header}>{title}</header>
      <section className={styles.content}>
        <div>{link}</div>
        <div>{description}</div>
      </section>
    </div>
  )
}

export default Card