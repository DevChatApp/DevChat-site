import React from 'react';
import "./Pages.css";
import home_img from '../../img/home_img.PNG';

const Home = () => {
    return ( 
        <div>
            <div className="home">
                <div className="block1">
                    <img className="imgHome" src={home_img} alt="img" />
                </div>
                <div className="block2">
                    <h2 className="textHome">Commencez a discuter avec des développeurs</h2>
                </div>
            </div>
        </div>
     );
}
 
export default Home;