import CompanyLogo from '../assets/CompanyLogo.png';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#4F46E5', color: 'white', height: 'auto', padding: '30px 0' }}>
      <div className="container">
        <div className="row">
          {/* Logo and description */}
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="d-flex align-items-center mb-3">
              <img
                src={CompanyLogo}
                alt="AT Digital Logo"
                style={{ height: '40px', width: 'auto' }}
              />
            </div>
            <p style={{ 
              color: '#E0E7FF', 
              lineHeight: '1.6', 
              fontSize: '16px',
              maxWidth: '400px',
              fontWeight: '400',
              margin: 0 
            }}>
              Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
            </p>
          </div>

          {/* Our Technologies section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold mb-3" style={{ color: 'white', fontSize: '1rem' }}>
              Our Technologies
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ 
                  color: '#ffffffff', 
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'color 0.3s ease'
                }}>
                  ReactJS
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ 
                  color: '#ffffffff', 
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'color 0.3s ease'
                }}>
                  Gatsby
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ 
                  color: '#ffffffff', 
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'color 0.3s ease'
                }}>
                  NextJS
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ 
                  color: '#ffffffff', 
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'color 0.3s ease'
                }}>
                  NodeJS
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold mb-3" style={{ color: 'white', fontSize: '1rem' }}>
              Our Services
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ 
                  color: '#ffffffff', 
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'color 0.3s ease'
                }}>
                  Social Media Marketing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ 
                  color: '#ffffffff', 
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'color 0.3s ease'
                }}>
                  Web & Mobile App Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ 
                  color: '#ffffffff', 
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'color 0.3s ease'
                }}>
                  Data & Analytics
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <hr style={{ 
          marginTop: '-20px',
          opacity: 0.3,
          maxWidth: '630px',
          justifyContent: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          border: '1px solid #ffffffff'
        }} />
        
        <div className="row">
          <div className="col-12 text-center">
            <div className="d-flex justify-content-center align-items-center flex-wrap">
              <a href="#" className="text-decoration-none" style={{ 
                color: '#ffffffff', 
                fontSize: '14px',
                fontWeight: '500',
                transition: 'color 0.3s ease'
              }}>
                Privacy Policy
              </a>
              <span style={{ 
                color: '#ffffffff',
                border: '1px', 
                margin: '0 16px',
              }}>
                |
              </span>
              <a href="#" className="text-decoration-none" style={{ 
                color: '#ffffffff', 
                fontSize: '14px',
                fontWeight: '500',
                transition: 'color 0.3s ease'
              }}>
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;