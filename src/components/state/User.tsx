// import { useState } from "react";

// type AuthUser = {
//   name: string;
//   email: string;
// };

// export const User = () => {
//   const [user, setUser] = useState<AuthUser>({} as AuthUser);
//   const handleLogin = () => {
//     setUser({ name: "yohan", email: "yohan@yohan" });
//   };
//   //   const handleLogout = () => {
//   //     setUser(null);
//   //   };
//   return (
//     <div>
//       <button onClick={handleLogin}>Login</button>
//       {/* <button onClick={handleLogout}>Logout</button> */}
//       <h2>user in {user ? "Login" : "Logout"}</h2>
//       <div>user name is {user?.name}</div>
//     </div>
//   );
// };
