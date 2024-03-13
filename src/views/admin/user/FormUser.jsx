import { Container, Form, Button} from "react-bootstrap";
import { useState } from "react";
import { useUser } from "../../UserContext";

const FormUser = () => {

  const {createUser, getUsers} = useUser();

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let user = {...inputs};
    createUser(user);
    getUsers();
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control  
            name="nome"
            value={inputs.nome || ''}
            type="text"
            placeholder="Digite o nome"
            onChange={handleChange}
            required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            name="email"
            value={inputs.email || ''}
            type="email"
            placeholder="Digite o email"
            onChange={handleChange}
            required />
        </Form.Group>
        
        <Button className="mb-3" variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </Container>
    
  )
}

export default FormUser