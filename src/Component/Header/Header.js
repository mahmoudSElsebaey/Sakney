import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header-bg">
        <div className="header-text">
          <h3>Welcome</h3>
          <h2>Find shared apartments for expatriate students</h2>
          <p>
            Sakney Is the first destination for shared housing seekers in Egypt
          </p>
          <div className="header-btns">
            <button className="btn btn-primary">
              <i className="fas fa-search"></i>
              <Link to="search"> Search</Link>
            </button>
            <button className="btn btn-danger">
              <i className="fas fa-plus"></i>
              <Link to="search"> Add Ads</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
