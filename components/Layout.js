import Head from "next/head";
import Router from "next/router";
import { isLoggedIn, logout } from "../utils/authentication";
import { isClientSide } from "../utils/environment";

const Layout = (props) => {
  const handleLogout = (event) => {
    logout();
    Router.push("/");
  };

  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <title>currency-xrate</title>
      </Head>
      <div className="container">
        {isClientSide && isLoggedIn() && (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        )}

        <div className="row">
          <div className="col">
            <div className="main">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
