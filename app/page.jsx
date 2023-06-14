import Image from 'next/image';
import styles from './page.module.css';

import Header from './components/Header/Header';
import CardsList from './components/CardsList/CardsList';
import Divisor from './components/Divisor/Divisor';

export default function Home() {
  return (
    <>
      <main className={styles.main} /* style={{ border: '1px solid white' }} */>
        <Header />
        <Divisor />
        <CardsList />
        <Divisor />
      </main>
    </>
  );
}
