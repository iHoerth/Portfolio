import styles from './CardsList.module.css';
import Card from '../Card/Card';

const CardsList = () => {
  return (
    <section className={styles.cardsList}>
      <Card title={'TITULO 1'} description={'DESCRIPCION 1'} link={'LINK 1'} />
      <Card title={'TITULO 2'} description={'DESCRIPCION 2'} link={'LINK 2'} />
      <Card title={'TITULO 3'} description={'DESCRIPCION 3'} link={'LINK 3'} />
    </section>
  );
};

export default CardsList;
