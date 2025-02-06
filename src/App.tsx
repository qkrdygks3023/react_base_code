import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { PersonList } from "./components/PersionList";
import { Person } from "./components/Person";
import { Status } from "./components/Status";
import { Container } from "./components/Container";
import { User } from "./components/state/User";
import { Counter } from "./components/Counter";

function App() {
  const personName = {
    first: "park",
    last: "yohan",
  };

  const personNameList = [
    {
      first: "park 1",
      last: "yohan",
    },
    {
      first: "park 2",
      last: "yohan",
    },
    {
      first: "park 3",
      last: "yohan",
    },
  ];

  const [inputValue, setInputValue] = useState("");

  return <div className="App"></div>;
}

export default App;

{
  /* <Greet name={personName.first} count={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={personNameList} /> */
}
{
  /* //'loading' | 'success' | 'error'
      <Status status='loading' />
      <Status status='success' />
      <Status status='error' />
      <Heading > Placeholder text </Heading>
      <Oscar> <Heading> Oscar goest to Leonardo Dicpario! </Heading> </Oscar>
      <Greet name='yohan' isLoggedIn={true} /> */
}
{
  /* <Button
        handleClick={(event, id) => {
          console.log("button clicked", event, id);
        }}
      />
      <Input
        value={inputValue}
        handleChange={(e) => setInputValue(e.target.value)}
      />
      <Container
        style={{
          border: "1px solid black",
          maxWidth: "200px",
          padding: "10px",
          color: "red",
          fontWeight: "bold",
          display: "0",
        }}
      /> */
}

{
  /* <User /> */
}

{
  /* <Counter /> */
}
