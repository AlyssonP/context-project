import { Container } from "react-bootstrap";
import { UserProvider } from "../../UserContext";
import FormikUser from "./FormikUser";
import TableUsers from "./TableUsers";

const User = () => {
  return (
    <UserProvider>
      <Container>
        <FormikUser />
        <TableUsers />
      </Container>
    </UserProvider>
  )
}

export default User