import React, { useState, useContext, createContext } from "react";
import { instance as api } from '../api-instance';

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

const API_URL = process.env.REACT_APP_API_URL;


function useProvideAuth() {
  const [user, setUser] = useState(null);

    const logIn = async ({ email, password }) => {
        try {
          
          const response = await api.post(`${API_URL}/login`, { email: 'eve.holt@reqres.in', password: 'cityslicka' });
            
          const { data } = response;

          setUser(data.token);
          return response;
            
        } catch (error) {
          setUser(null);
          return error;
        }
    };

  return {
    user,
    logIn,
  };
}