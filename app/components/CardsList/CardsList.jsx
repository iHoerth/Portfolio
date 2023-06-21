import styles from './CardsList.module.css';
import Card from '../Card/Card';
import { projects } from '../../constants';

const CardsList = () => {
  return (
    <section className={styles.cardsList}>
      {projects.map((project) => (
        <Card
          name={project.name}
          link={project.source_link}
          description={project.description}
          thumbnail={project.thumbnail}
        />
      ))}
    </section>
  );
};

export default CardsList;
