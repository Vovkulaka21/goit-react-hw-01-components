

const Statisctics = ({ title, stats }) => {
  const statsList = stats.map(stat => (
    <li className="item">
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </li>
  ));
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {statsList}
      </ul>
    </section>
  );
};

export default Statisctics;