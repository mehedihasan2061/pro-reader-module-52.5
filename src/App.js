import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About';
import Books from './components/Books';
import BookDetails from './components/BookDetails'
import Home from './components/Home'
import Main from './layout/Main'
import ErrorPage from './components/ErrorPage'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/books",
          loader: () => {
            return fetch('https://api.itbook.store/1.0/new')
          },
          element:<Books></Books>
        },
        {
          path: "/book/:id",
          loader: ({params}) => {
            return fetch(`https://api.itbook.store/1.0/books/${params.id}`);
          },
          element:<BookDetails></BookDetails>
        },
        {
          path: '/about',
          element:<About></About>
        }
      ],
    },
  ]);
  return <div>
    <RouterProvider router={router}></RouterProvider>
  </div>
}

export default App
