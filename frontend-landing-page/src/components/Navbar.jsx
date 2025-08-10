import { useState, useEffect } from 'react';
import CompanyLogo from '../assets/CompanyLogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 719);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 719);
      //Close hamburger menu in desktop
      if (window.innerWidth > 719) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav 
        className="navbar fixed-top" 
        style={{ 
          backgroundColor: '#4F46E5',
          height: isMobile ? '85.37px' : '101.62px',
          transition: 'height 0.3s ease',
          zIndex: 1050
        }}
      >
        <div className="container h-100">
          <div className="d-flex align-items-center justify-content-between w-100 h-100">
            {/* Logo */}
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img
                src={CompanyLogo}
                alt="AT Digital Logo"
                style={{ 
                  height: '40px', 
                  width: 'auto',
                  flexShrink: 0 
                }}
              />
            </a>
            
            {/* Desktop navigation */}
            {!isMobile && (
              <div className="d-flex">
                <ul className="navbar-nav d-flex flex-row mb-0" style={{ whiteSpace: 'nowrap' }}>
                  <li className="nav-item">
                    <a 
                      className="nav-link" 
                      href="#services" 
                      style={{ 
                        color: 'white', 
                        fontWeight: '500', 
                        margin: '0 0.8rem',
                        fontSize: '14px',
                        letterSpacing: '0.5px',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      SERVICES
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className="nav-link" 
                      href="#about" 
                      style={{ 
                        color: 'white', 
                        fontWeight: '500', 
                        margin: '0 0.8rem',
                        fontSize: '14px',
                        letterSpacing: '0.5px',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      ABOUT US
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className="nav-link" 
                      href="#contact" 
                      style={{ 
                        color: 'white', 
                        fontWeight: '500', 
                        margin: '0 0.8rem',
                        fontSize: '14px',
                        letterSpacing: '0.5px',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      CONTACT US
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className="nav-link" 
                      href="#careers" 
                      style={{ 
                        color: 'white', 
                        fontWeight: '500', 
                        margin: '0 0.8rem',
                        fontSize: '14px',
                        letterSpacing: '0.5px',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      CAREERS
                    </a>
                  </li>
                </ul>
              </div>
            )}
            
            {/* Mobile hamburger */}
            {isMobile && (
              <button
                className="border-0 bg-transparent"
                onClick={toggleMenu}
                style={{ padding: '8px', zIndex: 1060, right: '20px', position: 'absolute', width: '31px', height: '24px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}
                aria-label="Toggle navigation"
              >
                <div>
                  <div style={{
                    width: '25px',
                    height: '3px',
                    backgroundColor: 'white',
                    margin: '4px 0',
                    transition: '0.3s'
                  }}></div>
                  <div style={{
                    width: '25px',
                    height: '3px',
                    backgroundColor: 'white',
                    margin: '4px 0',
                    transition: '0.3s'
                  }}></div>
                  <div style={{
                    width: '25px',
                    height: '3px',
                    backgroundColor: 'white',
                    margin: '4px 0',
                    transition: '0.3s'
                  }}></div>
                </div>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile hamburger menu popup */}
      {isMenuOpen && isMobile && (
        <>
          <div
            className="position-fixed"
            style={{
              top: '0',
              left: '0',
              width: '100%',
              height: '100vh',
              backgroundColor: 'white',
              zIndex: 1060,
              animation: 'slideIn 0.3s ease-out'
            }}
          >
            {/* Close button */}
            <button
              onClick={closeMenu}
              style={{
                position: 'absolute',
                top: '30px',
                right: '25px',
                background: 'transparent',
                border: 'none',
                fontSize: '28px',
                fontWeight: '700',
                color: '#000',
                cursor: 'pointer',
                padding: '0',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1061
              }}
              aria-label="Close menu"
            >
              ×
            </button>

            {/* Menu items */}
            <div style={{ padding: '80px 30px 30px 30px' }}>
              <ul className="list-unstyled mb-0">
                <li className="mb-3">
                  <a
                    href="#home"
                    className="text-decoration-none d-block"
                    style={{
                      color: '#000',
                      fontWeight: '500',
                      fontSize: '14px',
                      padding: '15px 0',
                      letterSpacing: '0.5px'
                    }}
                    onClick={closeMenu}
                  >
                    HOME
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#services"
                    className="text-decoration-none d-block"
                    style={{
                      color: '#000000ff',
                      fontWeight: '500',
                      fontSize: '14px',
                      padding: '15px 0',
                      letterSpacing: '0.5px'
                    }}
                    onClick={closeMenu}
                  >
                    SERVICES
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#about"
                    className="text-decoration-none d-block"
                    style={{
                      color: '#000',
                      fontWeight: '500',
                      fontSize: '14px',
                      padding: '15px 0',
                      letterSpacing: '0.5px'
                    }}
                    onClick={closeMenu}
                  >
                    ABOUT US
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="#contact"
                    className="text-decoration-none d-block"
                    style={{
                      color: '#000',
                      fontWeight: '500',
                      fontSize: '14px',
                      padding: '15px 0',
                      letterSpacing: '0.5px'
                    }}
                    onClick={closeMenu}
                  >
                    CONTACT US
                  </a>
                </li>
                <li className="mb-0">
                  <a
                    href="#careers"
                    className="text-decoration-none d-block"
                    style={{
                      color: '#000',
                      fontWeight: '500',
                      fontSize: '14px',
                      padding: '15px 0',
                      letterSpacing: '0.5px'
                    }}
                    onClick={closeMenu}
                  >
                    CAREERS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;