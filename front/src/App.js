import './App.css';
import Header from "./Header";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Avengers from "./Avengers/Avengers";
import Contact from "./Contact";
import Hero from "./Hero";

const AppLayout = () => (
    <>
      <Header />
      <Outlet />
    </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
      children: [
          {
              path: 'avengers',
              element: <Avengers />
          },
          {
              path: 'contact',
              element: <Contact />
          },
          {
              path: 'hero',
              element: <Hero />
          }
      ]
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
