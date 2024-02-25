
import { Provider } from "react-redux";
import store from "./store";
import Todo from "./components/Todo/Todo";

const App = () => {
  return (
    <>
    <Provider store={store}>
      <Todo />
    </Provider>
    </>
  )
}

export default App;