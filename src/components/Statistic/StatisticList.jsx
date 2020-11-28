import PropTypes from 'prop-types';
import s from './Statistic.module.css';

function StatisticList({ stats }) {
  return (
    <ul className={s.statisticList}>
      {stats.map(stat => (
        <li className={s.item} key={stat.id}>
          <span className="label">{stat.label}</span>

          <span className="percentage">{stat.percentage}</span>
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

export default StatisticList;
