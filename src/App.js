import "./App.css";
import React from 'react'
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createHashRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import Results from "./components/Results";
import MainContainer from "./components/MainContainer";
import History from "./components/History";

const appRouter = createHashRouter([
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
    },
    {
      path:'/history',
      element:<History />
    },
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
