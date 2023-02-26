import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Router from "./routes/routes";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Provider store={store}>
      <Router />
      <Footer />
    </Provider>
  );
}
export default App;
