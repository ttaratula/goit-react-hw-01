import "./App.css";
import Profile from "./components/Profile";
import userData from "./userData.json";
import friends from "./friends.json";
import FriendList from "./components/FriendList";
// import css from "./components/FriendList.module.css";

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
    </>


  );
}

