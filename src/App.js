import './App.css';
import user from './components/User_profile/user.json';
import statisticalData from './components/Statistic/statistical-data.json';
import friends from './components/Friends/friends.json';
import transaction from './components/Transaction_history/transaction.json';
import Profile from './components/User_profile/user_profile';
import StatsUser from './components/User_profile/user_stats';
import Statistics from './components/Statistic/Statistics';
import StatisticList from './components/Statistic/StatisticList';
import FriendList from './components/Friends/FriendList ';
import TransactionHistory from './components/Transaction_history/TransactionHistory';
import Conteiner from './components/Conteiner/Conteiner';

function App() {
  return (
    <Conteiner>
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

      <Statistics title="Upload stats">
        <StatisticList stats={statisticalData} />
      </Statistics>

      <FriendList friends={friends} />

      <TransactionHistory items={transaction} />
    </Conteiner>
  );
}

export default App;
