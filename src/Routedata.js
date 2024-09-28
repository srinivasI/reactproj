import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./First";
import App from "./App";
import Mytable from "./Mytable";
import Hookex1 from "./Hookex1";
import Second from "./Second";
import User from "./User";
import Login from "./Login";
import Register from "./Register";
import NoPage from "./NoPage";
export default function Routedata() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<First />}>
          <Route index element={<Second />} />
          <Route path="mytable" element={<Mytable />} />
          <Route path="hookeex" element={<Hookex1 />} />
          <Route path="register" element={<Register />} />
          <Route path="gituser" element={<User />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
