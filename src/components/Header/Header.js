import './Header.css';
import Users from '../Users/Users';
import ReactDOM from 'react-dom';
import Home from "../Home/Home";

function Header() {
  return (
      <header>
        <nav id="links" className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid me-auto">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" onClick={navigateToUsers}>Users</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="logo">
          <h1 onClick={navigateHome}>Basic 86</h1>
          <h2>Free HTML6 Website Template</h2>
        </div>
      </header>
  );
}

function navigateHome() {
  ReactDOM.render(<Home/>, document.getElementById('content'));
}

function navigateToUsers() {
  ReactDOM.render(<Users/>, document.getElementById('content'));
}

export default Header;
