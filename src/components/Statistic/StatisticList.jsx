import PropTypes from 'prop-types';
import s from './Statistic.module.css';

function StatisticList({ stats }) {
  return (
    <ul className={s.statisticList}>
      {stats.map(stat => (
        <li
          className={s.item}
          style={{ backgroundColor: randomCollor() }}
          key={stat.id}
        >
          <span className="label">{stat.label}</span>
          <span className={s.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  );
}

StatisticList.protoType = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    }),
  ),
};

function randomCollor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

export default StatisticList;
