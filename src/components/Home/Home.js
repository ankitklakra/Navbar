import React, { useEffect, useRef } from 'react';
import "./HomeStyles.css";
import homeSvg from "../../images/home.svg";
import { Scrambler, Cycler } from "react-text-scrambler";
// Default component below Navbar
function Home() {
    const phrases = [
        'Technocracy',
        'This is Technocracy',
        'This is Magic...',
    ];
    
    return (<>
        <div style={{width:'100%',height:'100%'}}>
        <img src={homeSvg} width="100%" height="100%" alt="logo"/>
            <div className="container">
                <div className="tag-container"></div>
                <p className="tagline">
                <Cycler duration={ 3000 } strings={ phrases } />
                </p>
                <p className="text-Container" >
				The TechnoCracy is the students' technical committee of NIT Raipur. It
				was a seed sown in 2007 by a few technical enthusiasts, which has grown
				and established its strong roots. Currently, it comprises of over 100
				members. Since its inception, The TechnoCracy has been working on
				providing the pathways to young minds to model their fascinations into
				reality and this year, The Technocracy will be delivering even more!
			</p>
            </div>
        </div>
    </>);
}
export default Home;