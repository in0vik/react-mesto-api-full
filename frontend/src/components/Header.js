import logoImage from "../images/logo.svg";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import HeaderNavContent from "./HeaderNavContent";

function Header({ currentUserEmail, loggedIn, loggedOut }) {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const isMobile = useMediaQuery({query: '(max-width: 640px)'});
  const isDesktop = useMediaQuery({query: '(min-width: 641px)'});

  function handleBurgerMenuClick(e) {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  }

  useEffect(() => {
    setIsMobileMenuOpened(false);
  }, [isDesktop])

  return (
    <>
      {isMobileMenuOpened && loggedIn && (
        <div className="header__mobile-menu">
          <HeaderNavContent loggedIn={loggedIn} loggedOut={loggedOut} currentUserEmail={currentUserEmail}/>
        </div>
      )}
      <header className="header">
        <a href="./" className="link header__link">
          <img src={logoImage} alt="Mesto logo" className="logo logo_place_header" />
        </a>
        {loggedIn && isMobile && (
          <nav className="header__burger-menu-button-container" onClick={handleBurgerMenuClick}>
            <div className="header__burger-menu-button"></div>
          </nav>
        )}
        {(isDesktop || (isMobile && !loggedIn)) && (
          <nav className="header__login-container">
            <HeaderNavContent loggedIn={loggedIn} loggedOut={loggedOut} currentUserEmail={currentUserEmail}/>
          </nav>)
        }
      </header>
    </>
  );
}

export default Header;
