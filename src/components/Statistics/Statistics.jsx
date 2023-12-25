import css from './Statistics.module.css';

const Statisctics = ({ title, stats }) => {

  const statsList = stats.map(stat => (
    <li key={stat.id} className={css.item}>
      <span>{stat.label}</span>
      <span>{stat.percentage}%</span>
    </li>
  ));

  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statlist}>{statsList}</ul>
    </section>
  );
};

export default Statisctics;
