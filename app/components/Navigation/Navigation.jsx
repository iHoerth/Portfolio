import Link from 'next/link';
import styles from './Navigation.module.css'

const links = [
  {
    label: 'Projects',
    route: '/',
  },
  {
    label: 'About Me',
    route: '/about',
  },
  {
    label: 'Contact',
    route: '/contact',
  },
];

const Navigation = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <h3 className={styles.title}>Ignacio Hoerth</h3>
        <nav className={styles.nav}>
          {links.map(({ label, route }) => (
            <li key={label}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navigation;
