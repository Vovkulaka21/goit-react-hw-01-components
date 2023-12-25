// TASK1
import Profile from './Profile/Profile';
import user from '../data/user.json';
// // TASK2
import Statisctics from "./Statistics/Statistics"
import data from "../data/data.json"
// // TASK3
// import FriendList from "./FriendList/FriendList"
// import friends from "../data/friends.json"
// // TASK4
// import TransactionHistory from "./TransactionHistory/TransactionHistory"
// import transaction from "../data/transactions.json"

export const App = () => {
  return (
    <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statisctics title="Upload stats" stats={data} />
    </>
  );
};
