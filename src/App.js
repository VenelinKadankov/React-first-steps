import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Pagination from './components/Pagination';
import Search from './components/Search';
import UserTable from './components/UserTable';
import Loader from './components/Loader';
import CreateUser from './components/CreateUser';

import * as userService from './services/userService';

import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAllUsers()
      .then(setUsers)
      .catch(err =>
        console.log(err))
  }, []);

  const [createClicked, createClickedUser] = useState(false);
  // const [selectedUser, setSelectedUser] = useState(null);

  const onClickCreate = async () => {
    createClickedUser(true);
  }

  const onClose = () => {
    createClickedUser(false);
    // setSelectedUser(null);
  };

  // console.log(users);

  return (
    <div className="App">
      <Header />

      <main className="main">
        <section className="card users-container">
          {createClicked && <CreateUser onClose={onClose} />}
          <Search />
          {users.length === 0 ? <Loader /> : <UserTable users={users} />}
          {/* <UserTable users={users} /> */}
          <button className="btn-add btn" onClick={() => onClickCreate()}>Add new user</button>
          {/* <Pagination /> */}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
