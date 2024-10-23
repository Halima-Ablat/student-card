import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Tommy" age={30} isStudent="true" />
      <Student name="Mark" age={38} isStudent="false" />
      <Student name="Jenny" age={18} isStudent="true" />
      <Student name="Diane" age={21} isStudent="true" />
      <Student name="Candy" />
    </>
  );
}

export default App;
