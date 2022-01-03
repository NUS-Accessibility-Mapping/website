import map from './static/About/map.png';
import phone from './static/About/phone.png';
import './App.css';

function About() {
  return (
    <div className="About">
      <header className="About-header">
        <h1>About Us</h1>
      </header>
      <body id="about-container">
        <div id="about-left">
          <p>
          We realised that our NUS campus isn't all that friendly to our Student with Accessibility Needs (SANs) and we needed to do something... One way we could help is through the detailed mapping of our campus buildings. By identifying inaccessible pathways and finding the friendliest route for our SANs, they can move around school easier! Furthermore, we intend to collate allllllllllll these information into an application for our SANs. We're open to integrating it with any of our active NUS apps as well!
          </p>
        </div>
        <div id="about-right">
          <div className='about-right-container'>
            <img src={map} alt="map" className='about-right-img'></img>
            <div className='about-right-text'>
              <p>Mark out inaccessible pathway</p>
            </div>
          </div>
          <div className='about-right-container'>
            <img src={phone} alt="phone" className='about-right-img'></img>
            <div className='about-right-text'>
              <p>Turn it into an application</p>
            </div>
          </div>
        </div>
        
      </body>
    </div>
  );
}

export default About;
