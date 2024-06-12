/* eslint-disable react/prop-types */
export default function UserTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile Number</th>
        </tr>
      </thead>

      <tbody>
        {props.users.map((item) => (
          <tr key={item.id}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.mobileNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
