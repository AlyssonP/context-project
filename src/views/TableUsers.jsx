import { useEffect } from "react";
import {useUser } from "./UserContext"
import { Container, Table } from "react-bootstrap"

const TableUsers = () => {

  let {users, getUsers} = useUser();

  useEffect(() => {
    getUsers()
  }, [users]);

  return (
    <Container>
      <h4>Users</h4>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, id) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{user.nome}</td>
                <td>{user.email}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}

export default TableUsers