import "./App.css";

import { Text } from "./components/polymorphic/Text";
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
      {/* <CustomComponent name="yohan" isLoggedIn={false} /> */}
      <Text size="sm" color="primary">
        hello
      </Text>
      <Text size="md" color="primary" as="h1">
        hello
      </Text>
      <Text size="lg" color="primary">
        hello
      </Text>
    </div>
  );
}

export default App;
