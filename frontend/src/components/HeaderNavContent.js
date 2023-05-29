import { Link, Route, Switch } from "react-router-dom";

function HeaderNavContent({ loggedIn, loggedOut, currentUserEmail }) {
  return (
    <>
      <p className="header__email">{currentUserEmail}</p>
      <Switch>
        <Route path="/sign-in">
          {!loggedIn && (
            <Link to="/sign-up" className="link button header__login-btn">
              Registration
            </Link>
          )}
        </Route>
        <Route path="/">
          {loggedIn ? (
            <Link to="/sign-in" onClick={loggedOut} className="link button header__login-btn">
              Logout
            </Link>
          ) : (
            <Link to="/sign-in" className="link button header__login-btn">
              Login
            </Link>
          )}
        </Route>
      </Switch>
    </>
  );
}

export default HeaderNavContent;