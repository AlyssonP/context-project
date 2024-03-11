import {Button, Container} from "react-bootstrap";
import {useUser } from "./UserContext";
import Component2 from "./Component2";

import TableUsers from "./TableUsers";
import FormUser from "./FormUser";
import FormikUser from "./FormikUser";

const Component1 = () => {

  let {show, setShow} = useUser();  

  const handleClick = (event) => {
    setShow(!show);
  }

  return (
    <>
    <Container>
      <h2>Componente 1</h2>
      <Button onClick={handleClick}>Mudar Show</Button>
      
      <Component2/>
    </Container>
    
    {/* <FormUser /> */}

    <FormikUser />
    
    <TableUsers/>
    
    </>
      
  )
}

export default Component1