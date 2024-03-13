import { createContext, useContext, useState } from "react";
import api from "../api/ContextApi";
import * as Yup from "yup";

const UserContext = createContext();

export const UserProvider = ({children}) => {
  
  let [show, setShow] = useState(true);
  let [users, setUsers] = useState([]);

  let blancUser = {nome : "", email: ""}

  const userValidationYup = Yup.object().shape({
    nome: Yup.string().min(3).max(80).required(),
    email: Yup.string().email().required(),
  });

  const getUsers = async () => {
    let response = await api.get("users");
    let users = await response.data;
    setUsers(users);
  }

  const createUser =  async (user) => {
    await api.post("users", user);
  }

  const deleteUser = async (id) => {
    await api.delete(`users/${id}`);
  }

  return (
    <UserContext.Provider 
      value={{
        users, 
        setUsers, 
        blancUser, 
        userValidationYup, 
        getUsers, 
        createUser,
        deleteUser,
        show, 
        setShow
      }}>
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