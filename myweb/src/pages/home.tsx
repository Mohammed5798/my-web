import '../style/main.css'

function HomePage() {

    let theme = localStorage.getItem("theme");
    

    return (
        <div className= {theme == "light" ? "home-container-light" : "home-container-dark"}>

            <div className="left">
                
                <div className="top">
                    <h1 className="first-title">hi, my name is</h1>
                    <h1 className="myname">mohammed</h1>
                    <h1 className="second-title">designer <span>&</span> developer</h1>
                </div>

                <div className="bottom">
                    <button className="button">explore</button>
                </div>
            
            </div>

            <div className="right">
                
                <span className='line'></span>

                <p className="text"> scroll down </p>

            </div>

        </div>
    );
}

export default HomePage;