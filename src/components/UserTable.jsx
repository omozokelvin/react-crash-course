import UserTableRow from './UserTableRow';

/* eslint-disable react/prop-types */
export default function UserTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile Number</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {props.users.map((item) => (
          <UserTableRow key={item.id} {...item} onDelete={props.onDelete} />
        ))}
      </tbody>
    </table>
  );
}
