import { useEffect } from "react";
import { useUser } from "../../UserContext"
import { Button, Container} from "react-bootstrap"
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
    </Container>
  )
}

export default TableUsers