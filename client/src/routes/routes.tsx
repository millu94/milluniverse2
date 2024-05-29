import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Music from "../pages/Music/Music";
import Software from "../pages/Software/Software";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Home /> },
            { path: "music", element: <Music /> },
            { path: "software", element: <Software /> },
            { path: "contact", element: <Contact /> },
        ],
    }
])