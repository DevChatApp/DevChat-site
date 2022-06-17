import React from 'react';
import "./Pages.css";
import home_img from '../../img/home_img.PNG';

const Home = () => {
    return ( 
        <div>
            <h1>Home Page</h1>
            <div className="home">
                <div className="img">
                    <img src={home_img} alt="img" />;
                </div>
                <div className="text">
                    <h2>Bonjour le monde</h2>
                </div>
            </div>
        </div>
     );
}
 
export default Home;