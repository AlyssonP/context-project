import { useEffect } from "react";
import { useUser } from "../../UserContext"
import { Button, Container, Table } from "react-bootstrap"
import DataTable from "react-data-table-component";

const TableUsers = () => {

  let {users, getUsers, deleteUser} = useUser();

  const handleClickRemoveUser = (event, id) => {
    // console.log(`Removendo o usuário: ${id}`);
    deleteUser(id);
  }

  const colums = [
    {
      name: "Nome",
      selector: (row) => row.nome
    },
    {
      name: "E-mail",
      selector: (row) => row.email
    },
    {
      name: "Opções",
      selector: (row) => {
        return (
          <Button
            variant="danger"
            onClick={(e) => handleClickRemoveUser(e,row.id)}
          >
            Remover
          </Button>
        );
      }
    }
  ];

  useEffect(() => {
    getUsers();
  }, [users]);

  return (
    <Container>
      <h4>Users</h4>
      <DataTable columns={colums} data={users}/>

      {/* <Table>
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
      </Table> */}
    </Container>
  )
}

export default TableUsers