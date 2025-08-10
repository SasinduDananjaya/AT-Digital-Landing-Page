import HeroImage from "../assets/HeroImage.png";
import Button from '../components/Button';
import FAQ from '../components/FAQSection';
import Footer from '../components/Footer';
import ComputerIcon from '../assets/ComputerIcon.png';
import SearchIcon from '../assets/SearchIcon.png';
import '../styles/landingPageStyles.css';

const LandingPage = () => {
  return (
    <div className="landingPage">
      
      {/* Hero section */}
      <section className="hero-section position-relative" style={{ marginTop: '75px' }}>
        {/* Desktop background image with content */}
        <div className="d-none d-md-block" style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: window.innerWidth < 768 ? 'contain' : 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          color: 'white'
        }}>
          {/* Gradient color card */}
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-content">
                  <div className="p-4 mb-4" style={{ 
                    background: 'linear-gradient(256.73deg, #1CBDDD 27.86%, #4DCA79 100%)',
                    maxWidth: '630px',
                    position: 'absolute',
                    top: '50%',
                    left: '5%',
                    marginBottom: '20px',
                  }}>
                    <h1 className="display-4 fw-bold mb-3" style={{ fontSize: '48px', lineHeight: '1.2' }}>
                      We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
                    </h1>
                    <Button text="Get free consultation" className="btn-lg" style={{ width: '214px', height: '38px' }}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile hero section layout */}
        <div className="d-md-none">
          {/* Hero image */}
          <div style={{
            backgroundImage: `url(${HeroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '50vh',
            minHeight: '300px'
          }}>
          </div>
          
          {/* Gradient card */}
          <div style={{ 
            background: 'linear-gradient(256.73deg, #1CBDDD 27.86%, #4DCA79 100%)',
            width: '100%',
            padding: '2rem 1rem'
          }}>
            <div className="container-fluid">
              <h1 className="fw-bold mb-3" style={{ 
                fontSize: '48px', 
                lineHeight: '1.2',
                color: 'white'
              }}>
                We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
              </h1>
              <Button 
                text="Get free consultation" 
                className="btn-lg" 
                style={{ 
                  width: '214px', 
                  height: '38px',
                  fontSize: '14px'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="py-5 services-section" style={{ backgroundColor: 'white', maxWidth: '1064px', alignContent: 'center', justifyContent: 'center', margin: '0 auto' }}>
        <div className="container">
          <div className="row align-items-center mb-5 g-4">
            <div className="col-lg-6">
                <div className="computer-icon mb-4">
                    <img
                        src={ComputerIcon}
                        alt="Computer Icon"
                        style={{
                        width: '100%',
                        maxWidth: '414px',
                        height: 'auto',
                        objectFit: 'contain',
                        }}
                    />
                </div>
            </div>
            <div className="col-lg-6">
              <h2 className="mb-3" style={{ color: '#4F46E5', fontWeight: '600', fontSize: '27px' }}>
                Web & Mobile App Development
              </h2>
              <p className="mb-4" style={{ color: '#000000', fontSize: '16px', lineHeight: '100%' }}>
                Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
              </p>
              <Button text="Learn more" className="learn-more-btn"/>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
                <div className="search-icon mb-4">
                    <img
                        src={SearchIcon}
                        alt="Search Icon"
                        style={{
                        width: '100%',
                        maxWidth: '414px',
                        height: 'auto',
                        objectFit: 'cover',
                        display: 'block',
                        marginLeft: 'auto',
                        }}
                    />
                </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <h2 className="mb-3" style={{ color: '#4F46E5', fontWeight: '600', fontSize: '27px' }}>
                Digital Strategy Consulting
              </h2>
              <p className="mb-4" style={{ color: '#000000', fontSize: '16px', lineHeight: '100%' }}>
                Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
              </p>
              <Button text="Learn more" className="learn-more-btn"/>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;