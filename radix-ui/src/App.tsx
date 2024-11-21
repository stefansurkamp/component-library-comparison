import logo from "./logo.svg";
import "./App.css";
import * as Popover from "@radix-ui/react-popover";
import "@radix-ui/themes/styles.css";
import { Flex, Text, Button, Theme } from "@radix-ui/themes";
import DialogDemo from "./DialogDemo";

function App() {
  return (
    <div className="App">
      <Theme
        accentColor="crimson"
        grayColor="sand"
        radius="large"
        scaling="95%"
      >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Popover.Root>
            <Popover.Trigger className="PopoverTrigger">
              Show info
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="PopoverContent">
                Some content
                <Popover.Arrow className="PopoverArrow" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
          <Flex direction="column" gap="2">
            <Text>Hello from Radix Themes :)</Text>
            <Button>Let's go</Button>
          </Flex>
          <DialogDemo />
        </header>
      </Theme>
    </div>
  );
}

export default App;
