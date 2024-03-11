import { createContext, useContext, useState } from "react";
import api from "../api/ContextApi"

const UserContext = createContext();

export const UserProvider = ({children}) => {
  
  let [show, setShow] = useState(true);
  let [users, setUsers] = useState([]);

  const getUsers = async () => {
    let response = await api.get("users");
    let users = await response.data;
    setUsers(users);
  }

  const createUser =  async (user) => {
    await api.post("users", user);
  }

  return (
    <UserContext.Provider value={{users, setUsers, getUsers, createUser, show, setShow}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const ctx = useContext(UserContext);
  if(!ctx) {
    throw new Error("Não é possivel achar o contexto");
  }
  return ctx;
}