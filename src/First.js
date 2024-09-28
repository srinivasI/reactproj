import { Outlet, Link } from "react-router-dom";

const First = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/mytable">MyTable</Link>
          </li>
          <li>
            <Link to="/hookeex">Hookex</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/gituser">Git suer</Link>
          </li>
          
        </ul>
      </nav>
<br></br>
<br></br>
      <Outlet />
    </>
  )
};


export default First;