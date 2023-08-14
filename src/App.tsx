import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { QuestionnairePage } from "./pages/QuestionnairePage/QuestionnairePage";
import { HomePage } from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        path: 'questionnaire/:pageNumber', // Nested questionnaire route
        element: <QuestionnairePage />,
      },
      // Add more nested routes if needed
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />
};
export default App;
