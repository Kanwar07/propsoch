import "./App.css";
import Context from "./context/Context";
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
import Map from "./pages/map/Map";
import Login from "./pages/login/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Explore />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="detail" element={<Detail />} />
      <Route path="map" element={<Map />} />
      <Route path="login" element={<Login />} />
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
