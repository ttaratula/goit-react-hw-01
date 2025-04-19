import "./App.css";
import Profile from "./components/Profile";
import userData from "./userData.json";
import friends from "./friends.json";
import FriendList from "./components/FriendList";
import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHistory";


export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>


  );
}

