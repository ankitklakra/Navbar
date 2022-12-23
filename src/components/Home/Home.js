import "./HomeStyles.css";
import homeSvg from "../../images/home.svg";
// Default component below Navbar
function Home() {
    return (<>
        <div style={{width:'100%',height:'100%'}}>
        <img src={homeSvg} width="100%" height="100%" alt="logo"/>
            <div className="container">
                <div className="tag-container"></div>
                <p className="tagline">THIS IS TECHNOCRACY</p>
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