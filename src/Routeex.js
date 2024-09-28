import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet } from 'react-router-dom';
  import Clsex2 from './Clsex2';
  import First from './First';
import Mytable from './Mytable';
import NoPage from './NoPage';
  export default function Routeex() {
    return (
      <Router>
        <nav style={{ margin: 10 }}>
            <Link to="/" style={{ padding: 5 }}>
            Home
            </Link>
            <Link to="/table" style={{ padding: 5 }}>
            MyTable
            </Link>
            <Link to="/about" style={{ padding: 5 }}>
            About
            </Link>
        </nav>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/table" element={<Mytable />} />
          <Route path="/about" element={<Clsex2 />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    );
  }