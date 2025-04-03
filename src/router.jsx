import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import BodyComponent from "./components/BodyComponent";
import Error from "./components/Error";
import Contacts from "./components/Contacts";
import MenuDetails from "./components/MenuDetails";


const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <App/>,
      errorElement : <Error/>,
      children: [
        {path:"/",element:<BodyComponent/>},
        {path:"/about",element:<About />},
        {path:"/contact",element:<Contacts />},
        {path:"/menu/:id",element:<MenuDetails />}


      ]
    }
  ])

  export default appRouter