import "./App.css";
import { Box } from "./components/context/Box";

import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { MutableRef } from "./components/ref/MutableRef";
import { Counter } from "./components/class/Counter";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateliterals/Toast";
import { CustomButton } from "./components/html/Button";
import { CustomComponent } from "./components/html/CustomComponent";
function App() {
  return (
    <div className="App">
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <MutableRef /> */}
      {/* <Counter message="hello 132" /> */}
      {/* <Private isLoggedIn={true} component={Profile} /> */}
      {/* <List
        items={["yohan", "park", "kim"]}
        onClick={(value) => {
          console.log(value);
        }}
      /> */}

      {/* <List
        items={[
          {
            id: 1,
            first: "yohan",
            last: "park",
          },
          { id: 2, first: "park", last: "kim" },
        ]}
        onClick={(value) => {
          console.log(value);
        }}
      /> */}
      {/* <RandomNumber value={3} isPositive={true} isNegative={true} /> */}
      {/* <Toast position="center" /> */}
      {/* <CustomButton
        variant="primary"
        onClick={() => {
          console.log("click");
        }}
      >
        Primary Button
      </CustomButton> */}
      <CustomComponent name="yohan" isLoggedIn={false} />
    </div>
  );
}

export default App;
