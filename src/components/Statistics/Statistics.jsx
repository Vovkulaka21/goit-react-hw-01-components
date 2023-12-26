import css from './Statistics.module.css';

const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

const Statisctics = ({ title, stats = [] }) => {
  const statsList = stats.map(stat => (
    <li key={stat.id} className={css.item} style={{ backgroundColor: generateRandomColor() }}>
      <span>{stat.label}</span>
      <span>{stat.percentage}%</span>
    </li>
  ));

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statlist}>{statsList}</ul>
    </section>
  );
};

export default Statisctics;
