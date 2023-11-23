//imported react from react library (modules)
import React, { Component } from "react";
// person object field that contains fullName, bio, Image and profession and a boolean Shows
class App extends Component {
  state = {
    person: {
      fullName: "Jaytech Fasasi",
      bio: "As a seasoned software developer with a passion for creating innovative and efficient solutions, I brings a wealth of experience to the world of technology. With a strong foundation in computer science and a keen eye for detail, I successfully designed and implemented a variety of software applications across different domains.I am proficient in a range of programming languages, including but not limited to Java, Python, and JavaScript. Their expertise extends to front-end and back-end development, allowing them to create seamless and responsive user experiences.I is well-versed in the latest industry trends and technologies, ensuring that their work aligns with the ever-evolving landscape of software development.In addition to technical skills,I am a collaborative team player who thrives in dynamic and fast-paced environments. They excel in translating complex requirements into practical, scalable solutions, demonstrating a commitment to delivering high-quality software on time and within budget.With a dedication to continuous learning and improvement, I stays abreast of emerging technologies and best practices. Whether working on individual projects or contributing to a team, I brings a proactive and innovative approach to software development, making them a valuable asset to any project.",
      imgSrc:
        "https://portfolio-jaytechent.vercel.app/assets/images/profile.png", // image link
      profession: "Software Developer",
    },
    show: false, // show here is a boolean value for the toggle button
    interval: 0, // to store the interval ID
  };

  // Function to toggle the show state
  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show, // at load, dont show profile
    }));
  };

  // Function to calculate the time interval since the component was mounted
  calculateInterval = () => {
    // Check if show is true before updating the interval
    if (this.state.show) {
      this.setState((prevState) => ({
        interval: prevState.interval + 1, // add 1 to previous state upward for the time the show is true
      }));
    }
  };

  // Lifecycle method - componentDidMount
  componentDidMount() {
    // Set up an interval to update the time every second
    this.intervalId = setInterval(this.calculateInterval, 1000);
  }

  // Lifecycle method - componentWillUnmount
  componentWillUnmount() {
    // Clear the interval when the component is about to unmount
    clearInterval(this.intervalId); //removed the entire timing when the  show is false
  } //

  //Display this complete profile , this profile details was read from the person object field created above (state)
  renderProfile() {
    const { person } = this.state; // the object (person) props was passed to the appropriate tag that need to display the profile when the show is true

    return (
      // the div that returns the profile display the time and pulse the time when the button is toggled and the show is false, this help to give the actual time the profile has been mounted
      // I style the profile too
      <div
        style={{
          margin: "40px",
          fontFamily: " Arial",
          padding: "20px",
          borderRadius: "5px",
          display: "flex",
          backgroundImage: `url("https://th.bing.com/th?id=OIP.ensiLtlsMoQxpqIoO-IyYgHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2") `,
          flexDirection: "column",
          justifyContent: "center",
          alignItem: "center",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          boxShadow:
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
        }}
      >
        <img
          style={{ height: "8rem", width: "8rem" }}
          src={person.imgSrc}
          alt={person.fullName}
        />
        <h2>{person.fullName}</h2>
        <h3> {person.profession}</h3>
        <p>{person.bio}</p>
      </div>
    );
  }

  render() {
    const { show, interval } = this.state;

    return (
      <div
        className="App "
        style={{ display: "grid ", placeContent: "center" }}
      >
        {/* Styles the heading with border radius, color and box shadow inline to make it look better */}
        <h1
          style={{
            borderRadius: "6px",
            textAlign: "center",
            backgroundColor: "blue",
            boxShadow:
              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
          }}
        >
          React Class Component To Display Profile When the Toggle is clicked
          with Time Mount Logged
        </h1>
        <button
          style={{
            color: "blue",
            fontWeight: "bolder",
            fontFamily: "fancy",
            border: "1px solid blue",
            borderRadius: "5px",
            height: "2rem",
            boxShadow:
              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
          }}
          onClick={this.toggleShow}
        >
          {" "}
          TOGGLE{" "}
        </button>

        {/* Display person's profile if show is true */}
        {show && this.renderProfile()}

        {/* Display time interval if show is true */}
        {show && (
          // I style the time paragraph too so it can have some beauty
          <p
            style={{
              color: "blue",
              fontWeight: "bolder",
              fontFamily: "fancy",
              border: "1px solid blue",
              borderRadius: "5px",

              textAlign: "center",
              alignItems: "center",
              boxShadow:
                "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
            }}
          >
            Time interval since mount: {interval} seconds
          </p>
        )}

        <footer
          style={{
            backgroundColor: "blue",
            marginTop: "420px",
            textAlign: "center",
            borderRadius: "5px",
          }}
        >
          Designed with 💝 by Fasasi for Jaytechent{" "}
        </footer>
      </div>
    );
  }
}

export default App;
