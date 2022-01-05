import '../App.js';
import people from "../static/Volunteer/people.gif"

function Volunteer() {
    return (
        <div className="Volunteer">
            <body id="volunteer-container">
                <div id="volunteer-left">
                    <div>
                        <img src={people} alt="people" className='volunteer-img'></img>
                    </div>
                </div>
                <div id="volunteer-right">
                    <div className='volunteer-right-container'>
                        <div className='volunteer-title'>
                            <p>Join us as a volunteer</p>
                        </div>
                        <div className="volunteer-content">
                            <p>Sign up as a volunteer for our groundwork!</p>
                        </div>
                        <div className="volunteer-button-holder">
                            <a href="https://nusaccmapping.carrd.co/" className="volunteer-button">SIGN UP NOW</a>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default Volunteer;