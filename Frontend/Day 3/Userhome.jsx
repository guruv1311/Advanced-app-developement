
import{ Component } from 'react';
import './Userhome.css';
import Footer from '../Components/Footer';
import Unav from '../Components/Unav';

class Userhome extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <div className="bodyyyu">
          <header className="hed1u">
            <Unav/>
          </header>
          <main>
          <div className="introu">
            <h1>Party & Event Venues</h1>
            <br/>
            <p>Organize inforetable birthday parties and exciting events for all occasions at our</p><p>Celeb Fete venues countrywide</p>
            </div>
            <div className="achievementsu">
            <div className="worku">
                <div className="img1u"></div>
                <p className="work-headingu">EVENT ORGANIZER</p>
                <p className="work-textu">A professional event organizer meticulously plans and executes events, overseeing logistics, budget management, and vendor coordination to create seamless and memorable experiences for clients. ..</p>
            </div>
            <div className="worku">
            <div className="img2u">
                </div>
                <p className="work-headingu">FAST APPROACH</p>
                <p className="work-textu">Our party event management app streamlines planning with intuitive features, allowing users to effortlessly organize and coordinate events, from invitations to logistics, ensuring a seamless and enjoyable party experience.</p>
            </div>
            <div className="worku">
            <div className="img3u"></div>
                <p className="work-headingu">EXPERIENCE</p>
                <p className="work-textu">Elevate your event planning experience with our party management app, offering intuitive tools for seamless organization, guest management, and dynamic coordination to ensure unforgettable celebrations. </p>
            </div>
            </div>
            <div className="about-meu">
            <div className="about-me-textu">
                <h2>A LITTLE ABOUT US</h2>
                <p>This is a application based on finding a suitable chef our event. You can find well experienced chef in our application.We only refer to best Chef in our application.
                    Our application select finely filtered chef around us.We believe that we give our best option.
                </p>
            </div>
            <img src="https://img.freepik.com/premium-photo/group-friends-celebrating-outdoor-birthday-party-night-created-with-generative-ai-technology_132358-19650.jpg" alt="me"/>
            </div>
          </main>
          <Footer/>
        </div>
      </>
    );
  }
}

export default Userhome;