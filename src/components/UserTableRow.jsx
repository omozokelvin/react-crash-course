/* eslint-disable react/prop-types */

export default function UserTableRow(props) {
  return (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.mobileNumber}</td>
      <td>
        <button onClick={() => props.onDelete(props.id)}>Delete</button>
      </td>
    </tr>
  );
}
