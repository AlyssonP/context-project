import { createContext, useContext, useState } from "react";
import api from "../api/ContextApi";
import * as Yup from "yup";

const UserContext = createContext();

export const UserProvider = ({children}) => {
  
  let [show, setShow] = useState(true);
  let [users, setUsers] = useState([]);
  let [user, setUser] = useState({});

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

  const getUser = async (id) => {
    let response = await api.get(`users/${id}`);
    let user = await response.data;
    return user;
  }

  const createUser =  async (user) => {
    await api.post("users", user);
    getUsers();
  }

  const deleteUser = async (id) => {
    await api.delete(`users/${id}`);
    getUsers();
  }

  return (
    <UserContext.Provider 
      value={{
        users, 
        setUsers, 
        user,
        setUser,
        blancUser, 
        userValidationYup, 
        getUsers, 
        getUser,
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