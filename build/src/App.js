import logo from './logo.svg';
import './App.css';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';

function App() {

  const routes = createBrowserRouter([
    {
      path:'/',
      Component:Home,
    },
    {
      path: "/form",
      Component: Form,
    },
  ])


  return (
    <>
    
    <RouterProvider router={routes}/>
    </>
  );
}

export default App;
