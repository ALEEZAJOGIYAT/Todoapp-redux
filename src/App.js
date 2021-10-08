import "./App.css";
import ToDoos from "./components/toDo";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import List from "./components/lists/list";
//

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToDoos />
        <List />
      </div>
    </Provider>
  );
}

export default App;
