import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(Cookies.get("user"));

  useEffect(() => {
    const fetchUser = (token) => {
      if (token) {
        try {
          const res = axios.get("/user");
          setUser(res.data);
        } catch (err) {
          console.log(err);
        }
      } else {
        setUser(null);
      }
    };

    fetchUser(token);

    const checkChange = () => {
      const newToken = Cookies.get("user");
      if (newToken !== token) {
        setToken(newToken);
        fetchUser(newToken);
      }
    };

    const interval = setInterval(checkChange, 5000);
    
    return () => clearInterval(interval);
  }, [token]);

  return (
    <UserContext.Provider value={{ user, setUser, setToken }}>
      {children}
    </UserContext.Provider>
  );
};
