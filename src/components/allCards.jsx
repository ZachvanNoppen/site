import React, { Component } from "react";
import Card from "./cardUI";
import HospitalDBImage from "../images/projects/hospital_database.PNG";
import SoundImage from "../images/projects/seeing_sound.PNG";
import HandlebarImage from "../images/projects/handlebar.PNG";
import SeekImage from "../images/projects/hide_seek.PNG";
import AloneImage from "../images/projects/Alone.PNG";
import HeyImage from "../images/projects/me.PNG";
import LeapImage from "../images/projects/leap_flight.PNG";
import VAATImage from "../images/projects/vaat.png";
import VisualiserImage from "../images/projects/sound_visualiser.PNG";
import PersonalImage from "../images/projects/personal.png";

import "./allCards.css";
class Projects extends Component {
  state = {
    languages: [
      { name: "mySQL", colour: "primary" },
      { name: "PHP", colour: "success" },
      { name: "CSS", colour: "danger" },
      { name: "C++", colour: "warning" },
      { name: "React", colour: "info" },
      { name: "Arduino", colour: "dark" },
      { name: "Javascript", colour: "light" },
      { name: "Art & Design", colour: "secondary" }
    ]
  };

  render() {
    return (
      <div className="card-group justify-content-center justify-content-around">
        <Card
          title={"Hospital Database"}
          image={HospitalDBImage}
          description="A database designed and built from the ground up in basic PHP and mySQL."
          lang={[
            this.state.languages[0],
            this.state.languages[1],
            this.state.languages[2],
            this.state.languages[6]
          ]}
          links={[
            {
              name: "github",
              link: "https://github.com/ZachvanNoppen/HospitalDB-site"
            },
            {
              name: "website",
              link: "http://ugrad.bitdegree.ca/~judeabufarha"
            }
          ]}
        />
        <Card
          title={"Seeing Sound"}
          image={SoundImage}
          description="A project made to create an interactive musical experience."
          lang={[this.state.languages[3]]}
          links={[
            {
              name: "github",
              link: "https://github.com/ZachvanNoppen/Seeing-Sound"
            },
            {
              name: "youtube",
              link: "https://youtu.be/ma1ktBNRwrE"
            }
          ]}
        />
        <Card
          title={"Hagrid's Handlebar"}
          image={HandlebarImage}
          description="A motorcylce game controler to move in a custom 3D envionment"
          lang={[this.state.languages[3], this.state.languages[5]]}
          links={[
            {
              name: "github",
              link: "https://github.com/ZachvanNoppen/Hagrid-s-Handlebar"
            },
            {
              name: "youtube",
              link: "https://www.youtube.com/watch?v=PPxQZJnwMJ8"
            }
          ]}
        />
        <Card
          title={"Personal Website"}
          image={PersonalImage}
          description="An in progress portfolio site created in React to learn the framework and display the work I do."
          lang={[
            this.state.languages[2],
            this.state.languages[4],
            this.state.languages[6]
          ]}
          links={[
            {
              name: "github",
              link: "https://github.com/ZachvanNoppen/site"
            },
            {
              name: "website",
              link: "https://www.zacharyvannoppen.com"
            }
          ]}
        />
        <Card
          title={"Leap Flight"}
          image={LeapImage}
          description="I bird flight simulator made with a Leap motion sensor. A demo is available on github."
          lang={[this.state.languages[3]]}
          links={[
            {
              name: "github",
              link: "https://github.com/ZachvanNoppen/leap-flight"
            }
          ]}
        />
        <Card
          title={"Hide and Seek"}
          image={SeekImage}
          description="A openCV project made for single player hide and seek. Features colour tracking and depth perception."
          lang={[this.state.languages[3]]}
          links={[
            {
              name: "github",
              link: "https://github.com/ZachvanNoppen/hide-and-seek"
            },
            {
              name: "youtube",
              link: "https://www.youtube.com/watch?v=JoSVz-qpEZ0"
            }
          ]}
        />

        <Card
          title={"Sound Visualiser"}
          image={VisualiserImage}
          description="An microcontroller that listens for ambient sound and animates LED's accordingly. Colour profiles are picked remotely via blutooth."
          lang={[this.state.languages[3], this.state.languages[5]]}
          links={[
            {
              name: "github",
              link: "https://github.com/ZachvanNoppen/Sound-Visualizer"
            }
          ]}
        />
        <Card
          title={"Alone"}
          image={AloneImage}
          description="A stop animation used as a portfolio piece for university"
          lang={[this.state.languages[7]]}
          links={[
            {
              name: "youtube",
              link: "https://www.youtube.com/watch?v=r-VPC7iPwio"
            }
          ]}
        />
        <Card
          title={"Hey! Animation"}
          image={HeyImage}
          description="My first 3D fully animated scene, created and rendered in AutoDesk Maya."
          lang={[this.state.languages[7]]}
          links={[
            {
              name: "youtube",
              link: "https://youtu.be/yajPmzp2UvE"
            }
          ]}
        />
        <Card
          title={"VAAT Logo"}
          image={VAATImage}
          description="A logo created for a design team working on layouts."
          lang={[this.state.languages[7]]}
          links={[
            {
              name: "website",
              link: "https://imgur.com/a/i1zjN3h"
            }
          ]}
        />
      </div>
    );
  }
}

//Later get the page to store all github items in the database
// so that when projects are pushed this website updates

export default Projects;
