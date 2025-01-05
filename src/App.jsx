import './App.css'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import { Provider, useDispatch } from 'react-redux'
import { store } from './Redux/Store'
import { Toaster } from 'react-hot-toast'

function App() {
  const routes = createHashRouter([{
    path: "",
    element: <Layout />,
    children:[
        {
          index: true,
          element: (
              <Home />
          ),
        },]
  }])

  return (
    <>
        <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
        <Toaster/>
        </Provider>
    </>
  );
}

export default App
