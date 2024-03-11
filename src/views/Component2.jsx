import { useUser } from "./UserContext";

const Component2 = () => {
  let {show} = useUser();

  return (
    <>
    <h2>Componente 2</h2>
    <p>O estado de show é {`${show}`}</p>
    </>
  )
}

export default Component2