import "./App.css";
import { Provider } from "react-redux";
import store from "./state/reducers/bankReducer";
import Buttons from "./Buttons";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Buttons />
      </div>
      ;
    </Provider>
  );
}

export default App;
