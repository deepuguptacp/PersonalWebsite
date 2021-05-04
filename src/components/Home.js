import React, { useContext } from "react";
import { firebaseAuth } from "./authProvider";

const Home = (props) => {
  const { handleSignout } = useContext(firebaseAuth);
  return (
    <div>
      Home, login successful!!!!!!
      <button onClick={handleSignout}>sign out </button>
    </div>
  );
};

export default Home;
