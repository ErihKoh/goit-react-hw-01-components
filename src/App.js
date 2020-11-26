import './App.css';
import user from './components/user.json';
import Profile from './components/user_prifile';
import StatsUser from './components/user_stats';

function App() {
  return (
   <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    >
      <StatsUser
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      /> 
      
    </Profile>
    
  );
}

export default App;
