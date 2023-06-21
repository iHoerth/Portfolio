import Link from 'next/link';
import styles from './Footer.module.css';
import { contact } from '../../constants';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>Footer</div>
      {contact.map((media) => (
        <Link href={media.url} target='_blank'>{media.name}</Link>
      ))}
    </div>
  );
};

export default Footer;
