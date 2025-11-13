import { Provider } from "react-redux";
import Body from "./Components/Body";
import Header from "./Components/Header";
import appStore from "./utils/appStore";
import { Router, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Children } from "react";
import MainContainer from "./Components/MainContainer";
import WatchVideo from "./Components/WatchVideo";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element:<Body/>,
  children:[
    {path:"/",
    element:<MainContainer/>},
    {
      path:"/watch",
      element:<WatchVideo/>
    }

  ]
}
])

function App() {
  return (
    <Provider store ={appStore}>
    <div>
           <Header/>
           <RouterProvider router={appRoute}/>
    </div>
    </Provider>
  );


}

export default App;
