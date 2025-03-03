import { useState } from "react";

export const LoggedIn = () => {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h2>user in {isLoggedIn ? "Login" : "Logout"}</h2>
    </div>
  );
};
