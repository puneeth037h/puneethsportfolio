import "./Home.css";
import backgroundpic from "../../assets/backgroudpic.jpg"
function Home()
{
    return(
        <div>
        <div className="menu">
            <p className="open-sans600">PUNEETH</p>
            <div className="navcomponents">
                <p className="navlinks open-sans500">PROJECTS</p>
                <p className="navlinks open-sans500">ABOUT</p>
                <p className="navlinks open-sans500">CONTACT</p>
            </div>

        </div>
        <div className="landingpage">
            <div className="description">
                <h1 className="open-sans800">
                    welcome!
                </h1>
                <p className="open-sans600">
                Welcome to Puneeth's portfolio website! Here, I showcase my coding, technical, and soft skills through project snapshots and live links. Explore my expertise and accomplishments to get a glimpse of my capabilities in web development.
                </p>
            </div>
            <img  src={backgroundpic} alt="" />
        </div>
        </div>
    )
}

export default Home;