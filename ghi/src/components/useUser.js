import { useState, useEffect, useRef } from "react";

const useUser = (token) => {
  const [user, setUser] = useState(null);
  const tokenRef = useRef(token);

  useEffect(() => {
    if (!tokenRef.current) {
      return;
    }

    const getUser = async () => {
      const result = await fetch(
        `${process.env.REACT_APP_USER_SERVICE_API_HOST}/token`,
        {
          method: "get",
          credentials: "include",
        },
      );
      const { account: user } = await result.json();
      setUser(user);
    };
    getUser();
  }, []);

  useEffect(() => {
    tokenRef.current = token;
  }, [token]);

  return user;
};

export default useUser;
