import React from "react";
import LogoutNav from "./LoggedOutNav";
import useToken from "@galvanize-inc/jwtdown-for-react";
import LoggedNav from "./LoggedNav";

function Nav() {
  const { token } = useToken();

  if (!token) {
    return (
      <>
        <LogoutNav />
      </>
    );
  }

  return (
    <>
      <LoggedNav />
    </>
  );
}

export default Nav;
