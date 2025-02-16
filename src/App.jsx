// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import userData from "./userData.json";
import Profile from './components/Profile';

function App() {

  return (
    <>
      <Profile username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
        />
    </>
  )
}

export default App
