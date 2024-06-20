import { UseState } from "./useState.js";
import { ClassState } from "./class.State.js";
import "./App.css";
function App() {
  return (
    <div className="App">
      <UseState name="UseState" />
      <ClassState name="ClassState" />
    </div>
  );
}

export default App;
