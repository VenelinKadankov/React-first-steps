import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Pagination from './components/Pagination';
import Search from './components/Search';
import UserTable from './components/UserTable';
import Loader from './components/Loader';

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

  // console.log(users);

  return (
    <div className="App">
      <Header />

      <main className="main">
        <section className="card users-container">
          <Search />
          {users.length === 0 ? <Loader /> : <UserTable users={users} />}
          {/* <UserTable users={users} /> */}
          <button className="btn-add btn">Add new user</button>
          <Pagination />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
