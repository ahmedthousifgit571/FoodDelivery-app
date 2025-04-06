import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import BodyComponent from "./components/BodyComponent";
import Error from "./components/Error";
import Contacts from "./components/Contacts";
import MenuDetails from "./components/MenuDetails";
import Profile from "./components/Profile";
import { lazy,Suspense } from "react";


const Instamart = lazy(()=> import('./components/Instamart'))
const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <App/>,
      errorElement : <Error/>,
      children: [
        {path:"/",element:<BodyComponent/>},
        {path:"/about",element:<About />,
         children: [
          {
            path: "profile",
            element:<Profile/>
          }
         ]

        },
        {path:"/contact",element:<Contacts />},
        {path:"/menu/:id",element:<MenuDetails />},
        {path:"/instamart",element: <Suspense fallback={<div>Loading...</div>}><Instamart /></Suspense>}


      ]
    }
  ])

  export default appRouter