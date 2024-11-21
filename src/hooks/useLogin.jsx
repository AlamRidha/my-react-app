import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

export const useLogin = () => {
  const [username, setUserName] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserName(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  return username;
};
