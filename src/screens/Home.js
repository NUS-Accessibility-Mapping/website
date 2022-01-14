import '../App.js';
import girl from '../static/Home/girl.gif'
import {Link} from "react-router-dom";
import {BsFillArrowRightCircleFill} from "react-icons/bs";

function Volunteer() {
    return (
        <div className="Home">
            <body id="home-container">
                <div id="home-left">
                    <div>
                        <h1>NUS Accessibility Committee</h1>
                    </div>
                    <div>
                        <p>Improving <span>campus accessibility</span> for students with
                            accessibility needs, while <span>improving wayfinding</span> for the entire NUS community.</p>
                    </div>
                    <Link style={{textDecoration: 'none'}} to='/about'>
                        <button>LEARN MORE<BsFillArrowRightCircleFill style={{paddingLeft: '0.8em', color: 'white'}}/></button>
                    </Link>
                </div>
                <div id="home-right">
                    <img src={girl} alt="" className="home-img"/>
                </div>
            </body>
        </div>
    );
}

export default Volunteer;