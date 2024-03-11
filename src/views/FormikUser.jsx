import { Formik } from "formik";
import { Container, Form, Button } from "react-bootstrap";
import { useUser } from "./UserContext";
import { object, string} from "yup"

const FormikUser = () => {

  let {createUser} = useUser();

  let initialValues = {nome : "", email: ""}

  const validations = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email é obrigatório";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if(!values.nome) {
      errors.nome = "Nome é obrigatório"
    }

    return errors;
  }

  const validationYup = object().shape({
    nome: string().min(3, "Digite um nome de no minimo 3 letras.").required("Campo nome é obrigatório."),
    email: string().email("E-mail inválido").required("Campo e-mail é obrigatório."),
  });

  const handleSubmitUserApi = (values, setSubmitting) => {
    createUser(values);
    setSubmitting(false);    
  }

  return (
    <Container>
      <h4>Cadastro de usuários</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationYup}
        onSubmit={(values, { setSubmitting }) => handleSubmitUserApi(values, setSubmitting)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              {errors.nome && touched.nome && <p className="mb-0 text-danger">*{errors.nome}</p>}
              <Form.Control  
                name="nome"
                value={values.nome}
                type="text"
                placeholder="Digite o nome"
                onChange={handleChange}
                onBlur={handleBlur}
                />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              {errors.email && touched.email && <p className="mb-0 text-danger">*{errors.email}</p>}
              <Form.Control 
                name="email"
                value={values.email}
                type="email"
                placeholder="Digite o email"
                onChange={handleChange}
                onBlur={handleBlur}
                />
            </Form.Group>
            <Button className="mb-3" variant="primary" type="submit" disabled={isSubmitting}>
              Cadastrar
            </Button>
          </Form>
        )}
      </Formik>
      
    </Container>
  )
}

export default FormikUser