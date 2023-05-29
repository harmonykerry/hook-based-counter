import "./App.css";

import Banner from "./component/Banner";
import Counter from "./component/Counter";
import Container from "@mui/material/Container";

function App() {
  return (
    <Container>
      <Banner />
      <Counter />
    </Container>
  );
}

export default App;
