import "./App.css";
import "./components/StatusTagComponent/StatusTagComponent";

function App() {
  return (
    <div className="App">
      {/* @ts-ignore */}
      <status-tag status="Renamed"></status-tag>
    </div>
  );
}

export default App;
