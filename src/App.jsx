import { useEffect, useState } from 'react';
import AddUserForm from './components/AddUserForm';
import UserTable from './components/UserTable';
function addToLocalStorage(newUsers) {
  localStorage.setItem('users', JSON.stringify(newUsers));
}

export default function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (createdUser) => {
    const newUsers = [...users, createdUser];

    setUsers(newUsers);

    addToLocalStorage(newUsers);
  };

  const handleDeleteUser = (id) => {
    const filteredUsers = users.filter((item) => item.id !== id);

    setUsers(filteredUsers);

    addToLocalStorage(filteredUsers);
  };

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users'));

    if (!users?.length) {
      return;
    }

    setUsers(users);
  }, []);

  return (
    <>
      <h1>Phone Book</h1>

      <AddUserForm onAddUser={handleAddUser} />

      <UserTable users={users} onDelete={handleDeleteUser} />
    </>
  );
}
