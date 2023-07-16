import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import CoursesPage from "./components/courses/CoursesPage";
import CourseDetailsPage from "./components/courses/CourseDetailsPage";
import RootPage from "./components/RootPage";
import LessonsPage from "./components/lessons/LessonsPage";
import {loader as coursesLoader} from "./components/courses/Courses"
import { loader as courseDetailLoader } from "./components/courses/CourseDetailsPage";
import {loader as lessonsLoader} from "./components/lessons/LessonsPage"
import ErrorPage from "./components/ErrorPage";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/courses",
          element: <CoursesPage />,
          loader: coursesLoader
        },
        {
          path: "/coursesDetails/:courseId",
          element: <CourseDetailsPage />,
          loader: courseDetailLoader,
        },
        {
          path: "/lessons/:courseId/:lessonId",
          element: <LessonsPage/>,
          loader: lessonsLoader

        }
      ],
    },
  ]);
  return <RouterProvider router={route} />;
}

export default App;
