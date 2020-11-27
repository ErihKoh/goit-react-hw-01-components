import './App.css';
import user from './components/task_1/user.json';
import statisticalData from './components/task_2/statistical-data.json';
import Profile from './components/task_1/user_prifile';
import StatsUser from './components/task_1/user_stats';
import Statistics from './components/task_2/Statistics';
import StatisticList from './components/task_2/StatisticList';

function App() {
  return (
    <div> 
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

    <Statistics title="Upload stats" >
        <StatisticList items={statisticalData}/> 
    </Statistics>
   </div>
    
  );
}

export default App;
