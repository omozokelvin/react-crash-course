/* eslint-disable react/prop-types */
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialUser = {
  firstName: '',
  lastName: '',
  mobileNumber: '',
};
export default function AddUserForm(props) {
  const [user, setUser] = useState(initialUser);

  const handleSubmit = (event) => {
    const newUser = { ...user, id: uuidv4() };

    props.onAddUser(newUser);

    setUser(initialUser);
    event.preventDefault();
  };

  return (
    <form
      style={{
        marginBottom: '2rem',
      }}
      onSubmit={handleSubmit}
    >
      <fieldset>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          required
          value={user.firstName}
          onChange={(e) =>
            setUser((currentUser) => ({
              ...currentUser,
              firstName: e.target.value,
            }))
          }
        />
      </fieldset>

      <fieldset>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          required
          value={user.lastName}
          onChange={(e) =>
            setUser((currentUser) => ({
              ...currentUser,
              lastName: e.target.value,
            }))
          }
        />
      </fieldset>

      <fieldset>
        <label htmlFor="mobileNumber">Mobile number</label>
        <input
          id="mobileNumber"
          required
          value={user.mobileNumber}
          onChange={(e) =>
            setUser((currentUser) => ({
              ...currentUser,
              mobileNumber: e.target.value,
            }))
          }
        />
      </fieldset>

      <button type="submit"> Submit </button>
    </form>
  );
}
