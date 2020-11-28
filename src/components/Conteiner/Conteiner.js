import PropTypes from 'prop-types';
import s from './Conteiner.module.css';

function Conteiner({ children }) {
  return <div className={s.conteiner}>{children}</div>;
}

Conteiner.protoType = {
  children: PropTypes.node,
};

export default Conteiner;
