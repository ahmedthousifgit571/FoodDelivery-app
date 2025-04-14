import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import "../src/index.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
      </Provider>
    </>
  );
}

export default App;
