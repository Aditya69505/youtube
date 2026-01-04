
import { Provider } from 'react-redux'
import './App.css'
import Body from './components/Body'
import store from "./utils/store"
import Head from './components/Head'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainComponent from './components/MainContainer'
import WatchPage from './components/WatchPage'
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainComponent />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {


  return (
    <>
    <Provider store={store}>
    <div>
     <Head />
      <RouterProvider router={appRouter} />

     </div> 
     </Provider>
    </>
  )

}

export default App
