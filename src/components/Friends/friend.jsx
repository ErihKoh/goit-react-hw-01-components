import PropTypes from 'prop-types';
import s from './Friends.module.css';

function Friend({ avatar, name, isOnline }) {
  return (
    <>
      <span
        className={s.status}
        style={{ backgroundColor: isOnline ? '#FF0000' : '#008000' }}
      ></span>

      <img className={s.avatar} src={avatar} alt={name} width="48" />

      <p className={s.name}>{name}</p>
    </>
  );
}

Friend.protoType = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friend;
