import PropTypes from 'prop-types';
import s from './Statistic.module.css';

function Statistics({ title, children }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      {children}
    </section>
  );
}

Statistics.protoType = {
  children: PropTypes.node,
};

export default Statistics;
