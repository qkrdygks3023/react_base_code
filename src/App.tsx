import "./App.css";
import { Box } from "./components/context/Box";

import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { MutableRef } from "./components/ref/MutableRef";
import { Counter } from "./components/class/Counter";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
function App() {
  return (
    <div className="App">
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <MutableRef /> */}
      {/* <Counter message="hello 132" /> */}
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;
