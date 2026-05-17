// src/pages/SmartServices.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/smartservices.css";

function SmartServices() {

  const services = [

    {
      title: "AI City Guide",
      desc: "Smart recommendations based on your interests and nearby locations.",
      icon: "🤖"
    },

    {
      title: "Emergency Help",
      desc: "Quick access to hospitals, emergency contacts and healthcare services.",
      icon: "🚑"
    },

    {
      title: "Navigation & Maps",
      desc: "Navigate city locations with smart directions and route assistance.",
      icon: "🗺️"
    },

    {
      title: "Smart Parking",
      desc: "Find nearby parking availability instantly across the city.",
      icon: "🅿️"
    },

    {
      title: "Live Weather",
      desc: "Get real-time weather updates and environmental conditions.",
      icon: "🌦️"
    },

    {
      title: "Event Booking",
      desc: "Book tickets for concerts, festivals and smart city events.",
      icon: "🎫"
    }

  ];

  function handleService(title){

    if(title === "AI City Guide"){

      window.open(
        "https://maps.google.com",
        "_blank"
      );
    }

    else if(title === "Emergency Help"){

      window.open(
        "https://www.apollohospitals.com/",
        "_blank"
      );
    }

    else if(title === "Navigation & Maps"){

      window.open(
        "https://maps.google.com",
        "_blank"
      );
    }

    else if(title === "Smart Parking"){

      window.open(
        "https://www.parkplus.io/",
        "_blank"
      );
    }

    else if(title === "Live Weather"){

      window.open(
        "https://weather.com/en-IN/weather/today/",
        "_blank"
      );
    }

    else if(title === "Event Booking"){

      window.location.href = "/events";
    }
  }

  return (

    <div className="smart-page">

      <Navbar />

      <section className="smart-hero">

        <img
          src="https://i.pinimg.com/originals/45/d0/79/45d0790c293e5dba3077f4ad0c4826c6.gif"
          alt=""
          className="smart-bg"
        />

        <div className="smart-overlay"></div>

        <div className="smart-content">

          <h1>
            Smart City
            <span> Services</span>
          </h1>

          <p>
            Experience futuristic digital services
            designed for smart Nagpur city users.
          </p>

        </div>

      </section>

      <section className="services-section">

        <h2>
          Explore Services
        </h2>

        <div className="services-grid">

          {
            services.map((item,index) => (

              <div
                className="service-card"
                key={index}
              >

                <div className="service-icon">
                  {item.icon}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.desc}
                </p>

                <button
                  onClick={() =>
                    handleService(item.title)
                  }
                >
                  Explore
                </button>

              </div>

            ))
          }

        </div>

      </section>

      <section className="extra-services-section">

        <h2>
          Smart Integrations
        </h2>

        <div className="extra-services-grid">

          <div className="extra-card">

            <h3>
              Google Maps
            </h3>

            <p>
              Navigate smart city routes
              with real-time directions.
            </p>

            <button
              onClick={() =>
                window.open(
                  "https://maps.google.com",
                  "_blank"
                )
              }
            >
              Open Maps
            </button>

          </div>

          <div className="extra-card">

            <h3>
              Live Weather
            </h3>

            <p>
              Check live weather forecasts
              and environmental updates.
            </p>

            <button
              onClick={() =>
                window.open(
                  "https://weather.com/en-IN/weather/today/",
                  "_blank"
                )
              }
            >
              View Weather
            </button>

          </div>

          <div className="extra-card">

            <h3>
              Smart Parking
            </h3>

            <p>
              Explore parking locations
              and smart vehicle services.
            </p>

            <button
              onClick={() =>
                window.open(
                  "https://www.parkplus.io/",
                  "_blank"
                )
              }
            >
              Open Parking
            </button>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default SmartServices;