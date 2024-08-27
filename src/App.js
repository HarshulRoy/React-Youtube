import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import Results from "./components/Results";
import MainContainer from "./components/MainContainer";

const appRouter = createBrowserRouter([
  {path:'/',
  element:<div><Head /><Body /></div>,
  children:[
    {
      path:'/',
      element:<MainContainer />
    },
    {
      path:'/watch',
      element:<WatchPage />
    },
    {
      path:'/results',
      element:<Results />
    }
  ]}
])

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} /> 
      </div>
    </Provider>
  );
}

export default App;
