import PropTypes from 'prop-types';
import s from './user_profile.module.css';

function StatsUser({ followers, views, likes }) {
  return (
    <ul className={s.stats}>
      <li className={s.statsItem}>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li className={s.statsItem}>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li className={s.statsItem}>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  );
}

StatsUser.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default StatsUser;
