import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { api, inputvalue } from "./Context.jsx";
function Navbar() {
  const { count } = useContext(api);
  const { inpval, setInpval } = useContext(inputvalue);
  const [actinpval, setActinpval] = useState("");
  const change = () => {
    setInpval(actinpval);
  };
  return (
    <>
      <nav>
        <Link to="/">
          <h1 className="title">Ecommerce Website</h1>
        </Link>
        <div className="input-container">
          <input
            type="text"
            placeholder="Search for items.."
            className="inp"
            onChange={(e) => setActinpval(e.target.value)}
            onKeyDown={(e) => e.key == "Enter" && change()}
          />
          <button className="butt" onClick={() => change()}>
            Submit
          </button>
        </div>
        <ul className="container">
          <li className="li">
            <Link to="/orders">Orders</Link>
          </li>
          <li className="li">
            <Link to="/cart">🛒Cart {count > 0 ? count : null}</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
