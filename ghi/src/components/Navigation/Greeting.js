import React, { useState, useEffect } from "react";
import { Text, Center } from "@chakra-ui/react";
import useUser from "./../useUser";
import useToken from "@galvanize-inc/jwtdown-for-react";

const Greeting = () => {
  const token = useToken();
  const user = useUser(token);
  const [firstName, setFirstName] = useState("");

  const fetchUserData = async (user_id) => {
    const accountUrl = `${process.env.REACT_APP_USER_SERVICE_API_HOST}/api/accounts/${user_id}`;
    const response = await fetch(accountUrl, {
      method: "GET",
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      setFirstName(data.first_name);
    }
  };

  useEffect(() => {
    if (user && user.id) {
      fetchUserData(user.id);
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return (
    <Center ml="-385px">
      <Text fontSize="lg" fontWeight="medium">
        Hi, {firstName}
      </Text>
    </Center>
  );
};

export default Greeting;
