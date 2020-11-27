import PropTypes from 'prop-types';

function Friend({ avatar, name, isOnline }) {
  return (
    <>
      <span className="status">{isOnline ? 'Online' : 'Ofline'}</span>

      <img className="avatar" src={avatar} alt={name} width="48" />

      <p className="name">{name}</p>
    </>
  );
}

Friend.protoType = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friend;
