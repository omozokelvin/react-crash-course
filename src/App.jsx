import { useState } from 'react';
import AddUserForm from './components/AddUserForm';
import UserTable from './components/UserTable';

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (createdUser) => {
    setUsers((current) => [...current, createdUser]);
  };

  return (
    <>
      <h1>Phone Book</h1>

      <AddUserForm onAddUser={handleAddUser} />

      <UserTable users={users} />
    </>
  );
}

export default App;
