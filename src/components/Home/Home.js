import "./HomeStyles.css";
// Default component below Navbar
function Home() {
    return (<>
        <div className="home">
            <div className="container">
                <img src={require('../../images/logo.png')} alt='logo' />
            </div>
        </div>
    </>);
}
export default Home;