import React, { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
// const dummyUsers = [];
function App() {


  const [users, setUsers] = useState([]);

  const addUsersHandler = user => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers]
    });
  };
  // console.log(users);

  return (
    <div className="App">
      <AddUser addUsersHandler={addUsersHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
