import "./App.css";
import { MyComponent, StatusTag } from "react-library";

function App() {
  return (
    <div className="App">
      <MyComponent first="Your" last="Name" />
      <StatusTag status="completed" text="Task Completed" />
    </div>
  );
}

export default App;
