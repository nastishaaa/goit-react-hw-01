
import './App.css';
import userData from "./userData.json";
import Profile from './components/Profile';
import friends from './friends.json';
import FriendList from './components/FriendList';


function App() {

  return (
    <>
    <h1>Profile</h1>
      <Profile username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
        />
        <h1>Friend List</h1>
        <FriendList friends={friends}/>
    </>
  )
}

export default App
