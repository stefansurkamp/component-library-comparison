import logo from "./logo.svg";
import "./App.css";
import { Button, Modal } from "@mui/base";
import { useState } from "react";
import UnstyledSliderIntroduction from "./Slider";
// Import guide on minimizing bundle sizes:
// https://mui.com/material-ui/guides/minimizing-bundle-size/

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          <Button className="btnStyle" onClick={() => setModalOpen(!modalOpen)}>
            Klick mich, los!
          </Button>
          <Modal open={modalOpen}>
            <div>Modal content</div>
          </Modal>
          <div className="width: 500px; height: 100px; background: 'red'">
            <UnstyledSliderIntroduction />
          </div>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
