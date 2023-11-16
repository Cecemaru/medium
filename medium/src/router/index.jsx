import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout";
import Home from "../pages/Home";
import Following from "../pages/Home/Following";
import ForYou from "../pages/Home/ForYou";
import NewStory from "../pages/NewStory/NewStory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: "/",
        element: <Home />,
        children: [
          {
            index: "/",
            element: <ForYou />,
          },
          {
            path: "/following",
            element: <Following />,
          },
        ],
      },
    ],
  },
  {
    path: "/new-story",
    element: <NewStory />,
  },
]);

export default router;
