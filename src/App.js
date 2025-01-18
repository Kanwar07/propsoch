import "./App.css";
import Context, { ContextData } from "./context/Context";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Explore from "./pages/explore/Explore";
import Layout from "./Layout";
import Wishlist from "./pages/wishlist/Wishlist";
import Detail from "./pages/detail/Detail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Explore />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="detail" element={<Detail />} />
    </Route>
  )
);

function App() {
  return (
    <Context>
      <RouterProvider router={router}></RouterProvider>
    </Context>
  );
}

export default App;
