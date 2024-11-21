import { AlertDialogDemo } from "./AlertDialogDemo";
import { SelectDemo } from "./SelectDemo";

function App() {
  return (
    <div className="bg-background dark:bg-background">
      <header className="App-header">
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
        <h1 className="text-3xl font-bold underline bg-red-500 border-muted p-8 m-8 border-8">
          Hello world!
        </h1>
        <AlertDialogDemo />
        <SelectDemo />
      </header>
    </div>
  );
}

export default App;
