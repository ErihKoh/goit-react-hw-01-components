import PropTypes from 'prop-types';


function Profile({avatar, name, tag, location, children}) {
return (<div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt={name}
      className="avatar"
    />
    <p className="name">{name}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
    {children}
  </div>

</div>)
}


Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Profile;